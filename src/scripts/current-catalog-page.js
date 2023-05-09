const navLinks = document.querySelectorAll('.site-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[1].classList.add('current');
    
}
