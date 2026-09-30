const toggle = document.getElementById('menu-toggle');

if(toggle) {
    toggle.addEventListener('change', ()=>{
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}