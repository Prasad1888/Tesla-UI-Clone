
let menu = document.querySelector('.menu')
let close = document.querySelector('.closeMenu')
let mainContainer = document.querySelector('.mainContainer')

let mobile_nav = document.querySelector('.mobile-nav')

menu.addEventListener('click', ()=>{
    mainContainer.style.display = 'none'
    mobile_nav.style.display = 'flex'
    mobile_nav.style.animation = "fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
})
close.addEventListener('click', ()=>{
    mainContainer.style.display = 'block'
    mainContainer.style.animation = "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
    mobile_nav.style.display = 'none'
})