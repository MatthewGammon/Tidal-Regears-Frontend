export const baseUrl = process.env.REACT_APP_BASE_URL;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export async function updateStatus(regearId, regear) {
    const url = `${baseUrl}/regears/${regearId}`;
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(regear),
    };
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error){
        console.error(error);
    }
}