//HTML elements
let mobile_menu__img = document.querySelector('.mobile-menu__img');
let mobile_menu__content = document.querySelector('.mobile-menu__content')

//Events
mobile_menu__img.addEventListener('click', showHamMenu);

//Functions 
function showHamMenu(){
    mobile_menu__content.classList.toggle('slide')
}

