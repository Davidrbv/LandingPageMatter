(function(){
    
    //Almacenamos los comentarios y los botones
    const sliders = [...document.querySelectorAll('.modules__item')];
    const siguiente = document.querySelector('#siguiente');
    const anterior = document.querySelector('#anterior');
    let value;   

    // Listener's botones
    siguiente.addEventListener('click', ()=>{
        changePosition(1);
    });
    anterior.addEventListener('click', ()=>{
        changePosition(-1);
    });

    // Cambiamos posición comentarios
    const changePosition = (add)=>{
        //Obtenemos el id del modulo actualmente visible
        const currentTestimony = document.querySelector('.modules__item--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        //Asignamos y mostramos el nuevo módulo en base al id y el botón pulsado.
        sliders[Number(currentTestimony)-1].classList.remove('modules__item--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('modules__item--show');

    }

})();