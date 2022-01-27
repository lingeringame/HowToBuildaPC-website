const content = document.querySelector('.pageContent');
let topOfContent = content.offsetTop;

function showUp() {
    if(window.scrollY >= topOfContent) {
        document.body.classList.add('fixNav');
    } else {
        document.body.classList.remove('fixNav');
    }
}

window.addEventListener('scroll', showUp)