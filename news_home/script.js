const menuButton = document.querySelector('.menu_btn')
const overlay = document.querySelector('.overlay')
const navList = document.querySelector('.nav_list')
const nav = document.querySelector('.nav')

function toggleMenu () {
  menuButton.classList.toggle('change')

  overlay.classList.toggle('overlay_active')
  if (overlay.classList.contains('overlay_active')) {
    overlay.classList.replace('overlay_slide_left', 'overlay_slide_right')
    /* navList.classList.replace('nav_slide_in', 'nav_slide_out')*/
  } else {
    overlay.classList.replace('overlay_slide_right', 'overlay_slide_left')
    /*navList.classList.replace('nav_slide_out', 'nav_slide_in')*/
  }
}
/*
const navSlide = () => {
  /*const burger = document.querrySelector('.menu_btn');
    const nav = document.querySelector('.nav_list');*/

/*menuButton.addEventListener('click', () => {
    nav.classList.add('nav_active')
  })*/

menuButton.addEventListener('click', toggleMenu)
/*menuButton.addEventListener('click', navSlide)*/
overlay.addEventListener('click', toggleMenu)
