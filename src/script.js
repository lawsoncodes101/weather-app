import fetchData from "./modules/fetchWeather.js";
import validateForm from "./utils/form_validation.js";
import fetchGIF from "./modules/fetchGIF.js";

const form = document.querySelector("form");
const img = document.querySelector("img");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        if (!validateForm(form)) throw new Error("Form submission error."); 
        
        const weatherData = await fetchData(form);
        const GIF = await fetchGIF(weatherData.icon);
        img.src = GIF;
    } catch (err) {
        console.error(err);
    }
});
