const openMenu = () => {
    const btnMenuRiot = document.querySelector('#btn-riot-open');
    const btnCloseMenuRiot = document.querySelector('#btn-close-menu-riot');
    const menuRiot = document.querySelector('#nav-menu-riot');

    const showMenuRiot = () => {
        menuRiot.classList.toggle('display-block');
        menuRiot.classList.remove('display-none');
    }

    const hiddenMenuRiot = () => {
        menuRiot.classList.toggle('display-none');
        menuRiot.classList.remove('display-block');
    }

    btnMenuRiot.addEventListener('click', showMenuRiot)
    btnCloseMenuRiot.addEventListener('click', hiddenMenuRiot)
}

export default openMenu;