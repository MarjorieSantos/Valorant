const activeMenuOptionRiot = () => {
    const btnRiotGames = document.querySelector('#riot-btn');
    const btnFlorescer = document.querySelector('#florescer-btn');

    const activeSpan = () => {
        btnRiotGames.classList.toggle('ativo')
    }

    const activeSpan2 = () => {
        btnFlorescer.classList.toggle('ativo')
    }

    btnRiotGames.addEventListener('click', activeSpan)
    btnFlorescer.addEventListener('click', activeSpan2)

}

export default activeMenuOptionRiot;