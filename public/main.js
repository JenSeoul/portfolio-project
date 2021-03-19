const mobileAbout = document.getElementById('mobile-about');
const burgerMenu = document.getElementById('burgermenu');
let   isOpen = false;
const scrollButton = document.getElementById('scroll');

burgerMenu.addEventListener('click', toggleNav);
scrollButton.addEventListener('click', ()=>{
    window.scrollTo(0, 1300);
});

function toggleNav(e){
    e.preventDefault();
    const navWrapper = e.target.nextElementSibling
    if (isOpen === false){
        navWrapper.style.display = 'block';
        isOpen = true;
    }
    else{
        navWrapper.style.display = 'none';
        isOpen = false;
    }
}