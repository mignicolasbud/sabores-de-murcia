console.log('Sabores de Murcia');
import mediumZoom from "medium-zoom";

const curiosityButtons = document.querySelectorAll(".curiosity-button");

curiosityButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const curiosity = button.nextElementSibling;

        if (curiosity.hasAttribute("hidden")) {
            curiosity.removeAttribute("hidden");
            button.textContent = "Ocultar curiosidad";
        } else {
            curiosity.setAttribute("hidden", "");
            button.textContent = "Ver curiosidad";
        }
    });
});

mediumZoom("[data-zoomable]");