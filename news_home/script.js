document
  .querySelector('a.menu_icon')
  .addEventListener('click', function (event) {
    document.getElementById('nav_links').style.width = '400px'
    /* document.getElementById('main').style.marginLeft = '250px'*/
  })

document
  .querySelector('a.close_btn')
  .addEventListener('click', function (event) {
    document.getElementById('nav_links').style.width = '0'
    document.getElementById('overlay').style.marginLeft = '0'
  })

document
  .querySelector('a.menu_icon')
  .addEventListener('click', function (event) {
    document.getElementById('overlay').style.marginLeft = '100%'
  })
