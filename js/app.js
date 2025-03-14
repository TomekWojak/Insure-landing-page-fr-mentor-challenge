
const burgerBtn = document.querySelector('.nav__burger-btn')
const sideNavBar = document.querySelector('.nav__links-mobile')


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