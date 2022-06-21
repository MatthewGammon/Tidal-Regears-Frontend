export const baseUrl = process.env.REACT_APP_BASE_URL;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

async function fetchJson(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return null;
        }
        console.log(response);
        console.log(typeof response);
        const payload = await response.json();
        console.log(typeof payload);
        console.log(payload);
        if (payload.error) {
            return Promise.reject({message: payload.error});
        }
        return payload;

    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error(error.stack);
            throw error;
        }
    }
}

export async function createBuild(build) {
    const url = `${baseUrl}/builds`;
    const options = {
        method: 'POST',
        headers,
        // will not post, but does not throw "unexpected end of json" error.
        // change abck to JSON.stringify(build); to get it to post again
        body: JSON.stringify(build),
    };
    try {
        const response = await fetch(url, options);
        const payload = response.json();
    } catch (error) {
        console.log("I caught an error");
    }
    // return await fetchJson(url, options);
}

export async function readBuild(buildId) {
    const url = `${baseUrl}/builds/${buildId}`;
    const options = {
        method: 'GET',
        headers
    };
    return await fetchJson(url, options);
}

export async function updateBuild(build) {
    const url = `${baseUrl}/builds/${build.buildId}`;
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(build)
    };
    return await fetchJson(url, options);
}

export async function listBuilds(params) {
    const url = new URL(`${baseUrl}/builds`);
    Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
    );
    return await fetchJson(url, {headers}, [])
}