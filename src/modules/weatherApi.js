const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const params = new URLSearchParams({
    unitGroup: "us",
    key: "U4LFZMCQF4663KVW9UQ4DPUC4",
    elements: "conditions,datetime,description,icon,name,preciptype",
    contentType: "json",
});

export async function fetchData(query) {
    try {
        if (typeof query !== "string") {
            throw new TypeError("Expected a string");
        };

        const res = await fetch(
            `${BASE_URL}${encodeURIComponent(query)}/today?${params}`,
        );

        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await res.json();
        console.log(data);

        return {
            date: new Date().toISOString().split("T")[0],
            address: data.resolvedAddress,
            timezone: data.timezone,
            condition: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
            description: data.description
        };
    } catch (err) {
        console.error(err);
    }
}
