// duvidas
let elementosDuvida = document.querySelectorAll(".duvida");
elementosDuvida.forEach(function (duvida){
duvida.addEventListener('click', function(){
    duvida.classList.toggle('ativa')
})
})

// preloader
let elemenPreloader = document.getElementById('preloader')
let elemenLoader = document.getElementById('loader')
setTimeout(function(){
    elemenPreloader.remove('preloader');
    elemenLoader.remove('loader');
   
}, 1280);


