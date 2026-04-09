import { fetchData } from "./modules/weatherApi.js";
import { validateForm } from "./utils/form_validation.js";

const form = document.querySelector("form");
const formEls = Array.from(form.elements);
const country = form.elements["country"];
const state = form.elements["state"];

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const isValid = validateForm(formEls);
        if (!isValid) throw new Error("Form submission error.");

        const query = `${country.value}, ${state.value}`;
        const data = await fetchData(query);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
});
