function init() {

    const formulario = document.getElementById('formulario');
    const spinner = document.getElementById('spinner');
    const enviar = document.getElementById('enviar');
    const gracias = document.getElementById('gracias');
    const texto = document.getElementById('contact_text');
    const mensaje = document.getElementById('mensaje');
    const email = document.getElementById('email');

    let time = 0;
    let mostrarTexto;

    spinner.style.display = "none";

    enviar.addEventListener('click', () => {
        spinner.style.display = "flex";
        formulario.style.display = "none";
        setTimeout(() => {
            spinner.style.display = "none";
            gracias.style.display = "block"
            mostrarTexto = window.setInterval(agradecimiento, 30);
            mensaje.value = '';
            email.value='';
        }, 2000);
    });

    texto.addEventListener('click', () => {
        time = 0;
        texto.style.opacity = 0;
        formulario.style.display = "";
        gracias.style.display = "none"
    })

    function agradecimiento() {
        console.log('confirmar');
        if (time < 1) {
            time += 0.05;
            texto.style.opacity = time;
        }else clearInterval(mostrarTexto);
    }

}

window.addEventListener('DOMContentLoaded', init, false);