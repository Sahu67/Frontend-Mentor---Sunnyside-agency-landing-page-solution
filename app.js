function hamburgerClick() {
    document.querySelector('header').classList.toggle('clicked');
}

document.querySelectorAll('nav ul li').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('header').classList.remove('clicked');
    });
});