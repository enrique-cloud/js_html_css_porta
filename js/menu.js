const mlineas = document.querySelector('.mlineas');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(mlineas)

mlineas.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if (menu.classList.contains("spread") && e.target != menu && e.target != mlineas   ){

         menu.classList.toggle("spread");

    }
})
