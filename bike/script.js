// Header ///////////////////
var menu_box_logo = document.getElementById('menu_box_logo')
var menu_page = document.getElementById('menu_page')
menu_page.style.display = 'none'
menu_box_logo.innerHTML = '<i class="fa-solid fa-bars"></i>'
menu_box_counter = 0
menu_box_logo.onclick = () => {
    menu_box_counter++
    if (menu_box_counter % 2 == 0) {
        menu_box_logo.innerHTML = '<i class="fa-solid fa-bars"></i>'
        menu_page.style.display = 'none'  

    }
    else {
        menu_box_logo.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        menu_page.style.display = 'block'
        menu_page.style.display = 'flex'    
    }

}
menu_box_logo.style.color = 'white'
menu_box_logo.onmouseover = () => {
    if (menu_box_counter % 2 == 0) {
        menu_box_logo.style.color = '#f36b3a'
    }
    menu_box_logo.onmouseleave = () => {
        menu_box_logo.style.color = 'white'
    }
}

// scroll /////////////////

var scroll = document.getElementById('scroll_box')
scroll.style.display = 'none'
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scroll.style.display = 'block'
    }
    else {
        scroll.style.display = 'none'
    }
})
if (window.pageYOffset > 400) {
    scroll.style.display = 'block'
}
else {
    scroll.style.display = 'none'
}