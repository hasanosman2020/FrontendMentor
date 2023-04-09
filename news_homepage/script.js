const menuBars = document.querySelector('.menu_bars')
const overlay = document.querySelector('.overlay')
const navBar = document.querySelector('.navbar')

function toggleMenu () {
  menuBars.classList.toggle('change')
  overlay.classList.toggle('active_overlay')
  if (overlay.classList.contains('active_overlay')) {
    overlay.classList.replace('overlay_slide_left', 'overlay_slide_right')
    navBar.classList.replace('slide_out_nav', 'slide_in_nav')
  } else {
    overlay.classList.replace('overlay_slide_right', 'overlay_slide_left')
    navBar.classList.replace('slide_out_nav', 'slide_in_nav')
  }
}
menuBars.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)
