
const burgerBtn = document.querySelector('.nav__burger-btn')
const sideNavBar = document.querySelector('.nav__links-mobile')
const navLinks = document.querySelectorAll('.nav__links-mobile .nav__link')


burgerBtn.addEventListener('click', () => {
    sideNavBar.classList.toggle('active')
    const isOpened = burgerBtn.getAttribute('aria-expanded')
    burgerBtn.setAttribute('aria-expanded', 'true')


    if(isOpened === 'true'){
        burgerBtn.setAttribute('aria-expanded','false')

    }else {
        burgerBtn.setAttribute('aria-expanded','true')
    }

})

navLinks.forEach(link => link.addEventListener('click', () => {
    sideNavBar.classList.remove('active')
    burgerBtn.setAttribute('aria-expanded', 'false')
}))