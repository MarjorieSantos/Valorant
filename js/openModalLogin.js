const openModalLogin = () => {
    const btnOpenModal = document.querySelector('#btn-open-modal');
    const btnCloseModal = document.querySelector('#btn-close-modal');
    const modal = document.querySelector('#modal-login');

    const showModal = () => {
        modal.classList.toggle('display-flex');
        modal.classList.remove('display-none');
    }

    const hiddenModal = () => {
        modal.classList.toggle('display-none');
        modal.classList.remove('display-flex');
    }

    btnOpenModal.addEventListener('click', showModal);
    btnCloseModal.addEventListener('click', hiddenModal);
}

export default openModalLogin;