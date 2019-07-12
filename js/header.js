let btn_menu  = document.getElementById('btn_menu');
let menu_left = document.getElementById('menu_left');
btn_menu.addEventListener("click", () => {
    let margin = getComputedStyle(menu_left).getPropertyValue("margin-left");
    margin == '-300px' ? menu_left.style.marginLeft = '0px' : menu_left.style.marginLeft = '-300px';
});