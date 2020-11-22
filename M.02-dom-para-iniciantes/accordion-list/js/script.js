function intiTabNav() {
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
}
intiTabNav();

function intiAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classAtivo = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(classAtivo);
        accordionList[0].nextElementSibling.classList.add(classAtivo);

        function activeAccordion() {
            this.classList.toggle(classAtivo);
            this.nextElementSibling.classList.toggle(classAtivo);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
intiAccordion();