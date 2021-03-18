const about = document.getElementById('about');
const body = document.getElementById('body');
const homeMain = document.getElementById('home-main');

about.addEventListener('click', changePage);

function changePage(){
    homeMain.innerHTML = ''
    body.classList.add('flex-column', 'container', 'changebg');
}