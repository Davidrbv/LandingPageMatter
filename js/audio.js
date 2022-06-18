function init() {

    const sliders = [...document.querySelectorAll('.nav__menu--item')];
    const audio = document.getElementById('audio');

    sliders.forEach(slider => {
        slider.addEventListener('click', () => {
            audio.currentTime = 0.2;
            audio.play();
        }, false);
    })

}

window.addEventListener('DOMContentLoaded', init, false);