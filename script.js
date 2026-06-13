// ================= NAVBAR SHADOW =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
        navbar.style.background = "#ffffff";

    } else {

        navbar.style.boxShadow = "none";
        navbar.style.background = "#ffffff";

    }

});

// ================= CLOSE MOBILE MENU =================

const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navCollapse).hide();

        }

    });

});