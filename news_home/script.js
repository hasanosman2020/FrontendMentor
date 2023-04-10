const menuButton = document.querySelector('.menu_btn')
const overlay = document.querySelector('.overlay')
const navList = document.querySelector('.nav_list')

function toggleMenu () {
  menuButton.classList.toggle('change')
  overlay.classList.toggle('overlay_active')
  if (overlay.classList.contains('overlay_active')) {
    overlay.classList.replace('overlay_slide_left', 'overlay_slide_right')
  } else {
    overlay.classList.replace('overlay_slide_right', 'overlay_slide_left')
  }
}

menuButton.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)
