const BASE_URL = "https://api.giphy.com/v1/gifs/translate?";
const API_KEY = "lJ3K00v574iBvsgxkFEOcCjhGQ9Cm4YM&s";

export default async function fetchGIF(GIF) {
    try {
        const query = GIF.includes("-")
            ? GIF.split("-").reduce((acc, val) => (acc += ` ${val}`))
            : GIF;
        const res = await fetch(
            `${BASE_URL}api_key=${API_KEY}=${encodeURIComponent(query)}`,
        );
        const queryData = await res.json();

        if (!res.ok) {
            throw new Error(
                `HTTP Error! Status: ${response.status} - ${response.statusText}`,
            );
        }
        return queryData.data.images.original.url;
    } catch (err) {
        console.error(err);
    }
}
