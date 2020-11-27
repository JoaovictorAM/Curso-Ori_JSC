export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', handleClick);
        ['touchstart','click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick);
        })
    })
    
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this,()=>{
            console.log('ativou');
        });
    }

    function outsideClick(el,cb){
        const html = document.documentElement;
        html.addEventListener('click', handleOutsideClick);
        function handleOutsideClick (event){
            console.log(el);
            cb();
        }
    }
}