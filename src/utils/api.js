export const baseUrl = process.env.REACT_APP_BASE_URL;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export async function fetchWithTimeout(url, options = {}) {
    const {timeout = 15000} = options;

    const abortController = new AbortController();
    const id = setTimeout(() => abortController.abort(), timeout);

    const response = await fetch(url, {
        ...options,
        signal: abortController.signal,
    });
    clearTimeout(id);
    return response;
}