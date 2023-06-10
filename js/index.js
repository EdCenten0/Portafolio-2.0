//HTML elements
const mobile_menu__img = document.querySelector('.mobile-menu__img');
const mobile_menu__content = document.querySelector('.mobile-menu__content')

//Events

mobile_menu__img.addEventListener('click', showTabletMenu);

//Functions 

function showTabletMenu(){
    mobile_menu__content.classList.toggle('inactive')
}