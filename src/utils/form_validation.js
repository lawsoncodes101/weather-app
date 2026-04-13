const rules = {
    country: [
        {
            test: (v) => v.trim() !== "",
            message: "Please enter a country.",
        },
    ],
    state: [
        {
            test: (v) => v.trim() !== "",
            message: "Please enter a state.",
        },
    ],
};

export default function validateForm(form) {
    const formEls = Array.from(form.elements);
    let isValid = true;
    
    formEls.forEach((field) => {
        if (field.type === "button") return;
        isValid = validateField(field) && isValid;

        field.addEventListener("input", () => {
            isValid = validateField(field) && isValid;
        });
    });

    return isValid;
}

function validateField(field) {
    let isValid = true;
    if (field.type === "submit") return true;

    for (const [fieldName, fieldRules] of Object.entries(rules)) {
        if (fieldName === field.id) {
            const value = field.value;
            const error = fieldRules.find((rule) => !rule.test(value));
            clearError(field);

            if (error) {
                isValid = false;
                showError(field, error.message);
            }
        }
    }
    return isValid;
}

function showError(field, message) {
    let errorEl = document.createElement("span");
    errorEl.textContent = message;

    clearError(field);
    field.classList.add("invalid");
    field.insertAdjacentElement("afterend", errorEl);
}

function clearError(field) {
    const errorEl = field.nextElementSibling;
    field.classList.remove("invalid");
    errorEl?.remove();
}
