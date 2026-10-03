// Efecto de Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(11, 15, 25, 0.8)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.03)';
    }
});
// Language Toggle
const langBtn = document.getElementById('lang-toggle');
let isEnglish = false;

langBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    if (isEnglish) {
        document.body.classList.add('en');
        langBtn.innerText = 'ES';
    } else {
        document.body.classList.remove('en');
        langBtn.innerText = 'EN';
    }
});