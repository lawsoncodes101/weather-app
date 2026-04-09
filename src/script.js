import { fetchData } from "./modules/weatherApi.js";

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const data = await fetchData("Nigeria, Lagos");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
});
