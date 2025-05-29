const navbarToggle = document.querySelector ('.navbar-toggle');

const navbarMenu = document.querySelector ('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');

});

/*preguntas frecuentes*/

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");

    });

});
