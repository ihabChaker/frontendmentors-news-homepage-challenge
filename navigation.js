const hamburgerbtn = document.getElementById('hamburger-menu-button')
const navigation = document.getElementById('navigation')
const header = document.querySelector('.header')

hamburgerbtn.addEventListener('click', function () {
    const ariaExpanded = hamburgerbtn.getAttribute('aria-expanded')

    if (ariaExpanded == "true") {
        header.classList.remove('active')
        navigation.classList.remove('active')
        hamburgerbtn.classList.remove('active')
        hamburgerbtn.setAttribute('aria-expanded', 'false')
        document.body.style.overflowY = "visible"
    } else {
        header.classList.add('active')
        navigation.classList.add('active')
        hamburgerbtn.classList.add('active')
        hamburgerbtn.setAttribute('aria-expanded', 'true')
        document.body.style.overflowY = "hidden"
    }
})