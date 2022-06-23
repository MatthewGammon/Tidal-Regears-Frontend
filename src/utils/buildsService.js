export const baseUrl = process.env.REACT_APP_BASE_URL;

export const headers = new Headers();
headers.append('Content-Type', 'application/json');

export async function createBuild(build) {
    const url = `${baseUrl}/builds`;
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(build),
    };
    try {
        const response = await fetch(url, options);
        const payload = response.json();
    } catch (error) {
        console.log("I caught an error");
    }
}

export async function readBuild(buildId) {
    const url = `${baseUrl}/builds/${buildId}`;
    const options = {
        method: 'GET',
        headers
    };
    try {
        const response = await fetch(url, options);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }

}

export async function updateBuild(build) {
    const url = `${baseUrl}/builds/${build.buildId}`;
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(build)
    };
}

export async function listBuilds(params) {
    const url = new URL(`${baseUrl}/builds`);
    Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
    );

}

