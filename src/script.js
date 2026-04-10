import { fetchData } from "./modules/weatherApi.js";
import { validateForm } from "./utils/form_validation.js";

const form = document.querySelector("form");
const [country, state] = [form.elements["country"], form.elements["state"]];

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        if (!validateForm(form)) {
            throw new Error("Form submission error.");    
        }

        const query = `${country.value}, ${state.value}`;
        const data = await fetchData(query);
    } catch (err) {
        console.error(err);
    }
});
