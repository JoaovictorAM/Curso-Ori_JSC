const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tacContent = document.querySelectorAll('.js-tabContent section');

if (tabMenu.length && tacContent.length) {
    
    tacContent[0].classList.add('ativo');
    function activeTab(ativar) {
        tacContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tacContent[ativar].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}