const hamburger = document.querySelector('.hoverbar');
var openFlag = false;
function handleBurger() {
    if(openFlag) {
        document.body.classList.remove('nav-opened');
        document.body.classList.remove('nav-loaded');
        document.body.classList.remove('nav-loaded-active');
        openFlag = false;
        return;
    }
    document.body.classList.add('nav-opened')
    document.body.classList.add('nav-loaded');
    setTimeout(() => {
        if(document.body.classList.contains('nav-loaded')) {
            document.body.classList.add('nav-loaded-active');
        }
    }, 10);
    openFlag = true;
}

hamburger.addEventListener('click', handleBurger);