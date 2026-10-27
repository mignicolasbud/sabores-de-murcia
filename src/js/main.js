import mediumZoom from "medium-zoom";

/* =========================
   CURIOSIDADES
   ========================= */

const curiosityButtons = document.querySelectorAll(".curiosity-button");

curiosityButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const curiosity = button
            .closest(".food-card")
            .querySelector(".curiosity");

        const isOpen = !curiosity.hasAttribute("hidden");

        if (isOpen) {

            curiosity.setAttribute("hidden", "");

            button.textContent = "i";
            button.classList.remove("is-open");
            button.setAttribute("aria-label", "Mostrar curiosidad");

        } else {

            curiosity.removeAttribute("hidden");

            button.textContent = "×";
            button.classList.add("is-open");
            button.setAttribute("aria-label", "Cerrar curiosidad");

        }

    });

});

mediumZoom("[data-zoomable]");

