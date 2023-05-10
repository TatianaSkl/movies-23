const navLinks = document.querySelectorAll('.site-nav__link');
const navLinksModal = document.querySelectorAll('.mobile-menu-nav__link');
switchCurrentPage();

function switchCurrentPage() {
    navLinks[0].classList.add('current');
    // navLinksModal[0].classList.add('current');
}
