const about = document.getElementById('about');
const mobileAbout = document.getElementById('mobile-about');
const body = document.getElementById('body');
const burgerMenu = document.getElementById('burgermenu')
let   isOpen = false;

about.addEventListener('click', changePage);
mobileAbout.addEventListener('click', changePage);
burgerMenu.addEventListener('click', toggleNav);



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
function changePage(){
    body.innerHTML = '';
    body.classList.add('flex-column', 'container', 'changebg');

    body.innerHTML = `
    <header>
    <div class="logo">
        <a href="index.html"><img src="./images/Ellipse1.svg" alt="webdesign-portfolio" width="38"></a>
    </div>
    <nav>
        <a href="/" class="nav-menu outstroke">About</a>
        <a href="mailto:n.waves429@gmail.com" class="nav-menu outstroke">Hire me</a>
    </nav>
    </header>
    <div class="aboutmain">
    <div class="aboutitems center">
        <img src="images/Jen_profile.png" alt="Jen" width="150">
        <p class="outstroke">The girl from South Korea👋🏻</p>
    </div>
    <div class="aboutitems">
        <p>
            Hi hi! I’m Jen. A self-taught newbie web developer who are currently in programming journey with Javascript. I’m a firm believer of life is a long-ride of learning and figuring out the way to accomplish things and grow out of it. 
        </p>
    </div>
    <div class="aboutitems">
        <p>
        <span>Few keywords can describe me</span><br>
        # Instagram celebrity cat/dog follower<br>
        # Sriracha lover<br>
        # Flatwhite holic<br>
        </p>
    </div>
    <div class="aboutitems">
        <span>Stacks</span>
        <p>
        Vanlla JS / Node.js / Mongo DB(currently working on side)
        </p>
    </div>
    </div>
    <script src="main.js"></script>
    `

}
