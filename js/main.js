const openMenu = () => {
    const btnMenu = document.querySelector('#btn-menu-hamburger');
    const btnCloseMenu = document.querySelector('#btn-close-menu');
    const navMenu = document.querySelector('#nav-menu-itens');

    const showMenuOptions = () => {
        navMenu.classList.toggle('display-block');
        navMenu.classList.remove('display-none');
    }

    const hiddenMenuOptions = () => {
        navMenu.classList.toggle('display-none');
        navMenu.classList.remove('display-block');
    }

    btnMenu.addEventListener('click', showMenuOptions)
    btnCloseMenu.addEventListener('click', hiddenMenuOptions)
}

export default openMenu;