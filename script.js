document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");
    const backButtons = document.querySelectorAll(".back-btn");

    // Mostrar sección seleccionada y ocultar el menú
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Ocultar el menú
            nav.style.display = "none";

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.add("hidden"));

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(link.dataset.section);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });

    // Botón "Back" para volver al menú principal
    backButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.add("hidden"));

            // Mostrar menú y centrarlo
            nav.style.display = "flex";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hobbyLinks = document.querySelectorAll("#hobbies ul li a");
    const hobbySections = document.querySelectorAll("main section");

    hobbyLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Ocultar todas las secciones
            hobbySections.forEach(section => section.classList.add("hidden"));

            // Mostrar la sección correspondiente al hobby seleccionado
            const hobbyId = `hobby-${link.dataset.hobby}`;
            const targetSection = document.getElementById(hobbyId);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });
});

