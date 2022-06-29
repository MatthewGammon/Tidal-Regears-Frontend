import authHeader from '../services/auth-header';

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
        // this is awful, but I cannot seem to catch and display the proper error message from the backend
        if (response.status === 400) {
            return Promise.reject({message: "A build with matching gear and power requirements already exists."});
        }
        return response
    } catch (error) {
        if (error.name !== 'AbortError') {
            throw error;
        }
    }
}

export async function readBuild(buildId) {
    const url = `${baseUrl}/builds/${buildId}`;
    const options = {
        method: 'GET',
        headers: authHeader(),
    };
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        throw error;
    }

}

export async function updateBuild(build) {
    const url = `${baseUrl}/builds/${build.buildId}`;
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(build)
    };
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function listBuilds(params) {
    const url = new URL(`${baseUrl}/builds`);
    Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
    );
}

export async function deleteBuild(buildId) {
    const url = `${baseUrl}/builds/${buildId}`;
    const options = {
        method: 'DELETE',
        headers: authHeader(),
    };
    try {
        return await fetch(url, options);
    } catch (error) {
        throw error;
    }
}

