function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.getElementById("sidebar").addEventListener("mouseleave", function() {
    this.classList.remove("active");
});

let currentIndex = 0; 
const carousel = document.querySelector(".carousel");
const totalItems = document.querySelectorAll(".project-box").length;

function moveCarousel(direction) {
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => moveCarousel("next"), 4000);

/* prueba */