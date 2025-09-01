const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) { // scroll threshold
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => el.classList.add('show'));
});

const video = document.getElementById("modalVideo");
const modal = document.getElementById("videoModal");

modal.addEventListener('hidden.bs.modal', () => {
video.pause();
});