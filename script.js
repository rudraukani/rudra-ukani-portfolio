document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });
});
