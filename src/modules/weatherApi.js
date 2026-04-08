const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const params = new URLSearchParams({
    unitGroup: "us",
    key: "U4LFZMCQF4663KVW9UQ4DPUC4",
    contentType: "json",
});

export async function fetchData() {
    const response = await fetch(
        `${BASE_URL}${encodeURIComponent("Nigeria, Abuja")}?${params}`,
    );
    const data = await response.json();

    console.log(data);
}
