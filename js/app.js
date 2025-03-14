
const burgerBtn = document.querySelector('.nav__burger-btn')
const sideNavBar = document.querySelector('.nav__links-mobile')
const body = document.body
const html = document.documentElement

burgerBtn.addEventListener('click', () => {
    sideNavBar.classList.toggle('active')
    const isOpened = burgerBtn.getAttribute('aria-expanded')
    burgerBtn.setAttribute('aria-expanded', 'true')
    body.style.overflow = "hidden"
    html.style.overflow = "hidden"

    if(isOpened === 'true'){
        burgerBtn.setAttribute('aria-expanded','false')
        body.style.overflow = ""
        html.style.overflow = ""
    }else {
        burgerBtn.setAttribute('aria-expanded','true')
    }

})