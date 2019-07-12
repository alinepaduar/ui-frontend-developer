let btn_menu  = document.getElementById('btn_menu');
let menu_left = document.getElementById('menu_left');
btn_menu.onclick = () => {
    let margin = menu_left.style.marginLeft;
    margin == '-300px' ? menu_left.style.marginLeft = '0px' : menu_left.style.marginLeft = '-300px';
}