// Función encapsulada
(function(){
    //Recogemos todos los elementos con la clase 'aboutus__title'
    const titleaboutus = [...document.querySelectorAll('.aboutus__title')]; 

    titleaboutus.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; //Devuelve el siguiente hermano
            let addPadding = question.parentElement.parentElement; //Devuelve el padre

            addPadding.classList.toggle('aboutus__padding--add'); //Manipulamos atributo
            question.children[0].classList.toggle('aboutus__arrow--rotate'); //Rotamos la flecha

            if(answer.clientHeight === 0){ //
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`; //Mostramos información
        });
    });
})();