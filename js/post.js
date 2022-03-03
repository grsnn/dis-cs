//ventana modal compartir
const openShare = document.querySelector('.share');
const hiddeShare = document.querySelector('.times');
const containerShare = document.getElementById('containerShare');

openShare.addEventListener('click', (e) => {
    e.preventDefault();
    containerShare.classList.toggle('active');
});

hiddeShare.addEventListener('click', (e) => {
    e.preventDefault();
    containerShare.classList.remove('active');
});