function init(){

    const video = document.getElementById('video__view');
    const reproducir = document.getElementById('button-play');
    const full = document.getElementById('button-full');
    const inicio = document.getElementById('button-inicio');
    const retrasar = document.getElementById('button-retrasar');
    const adelantar = document.getElementById('button-adelantar');
    const bajarVolumnen = document.getElementById('button-bajar');
    const subirVolumnen = document.getElementById('button-subir');
    const icono = document.getElementById('ambos');

   
    /* Reproduction */
    reproducir.addEventListener('click', function(){
      if(video.paused && !video.ended){
        video.play();
        icono.setAttribute("class","fas fa-pause");
      }else if(!video.paused && !video.ended){
        video.pause();
        icono.setAttribute("class","fas fa-play");
      }
    },false);

    /* FullScreen */
    full.addEventListener('click', function(){
      if (document.fullscreenElement) return document.exitFullscreen()
      video.requestFullscreen()
    },false);

    /* Restart */
    inicio.addEventListener('click', function(){
      video.currentTime = 0;
      icono.setAttribute("class","fas fa-pause");
      video.play();
    },false);

    /* Volume up */
    subirVolumnen.addEventListener('click', function(){
      if(video.volume.toFixed(2) < 1){
        video.volume += 0.1;
      }
    },false);

    /* Volume down */
    bajarVolumnen.addEventListener('click', function(){
      if(video.volume.toFixed(2) > 0){
        video.volume -= 0.1;
      }
    },false);

    /* Rewind & Forward */
    retrasar.addEventListener('click', function(){video.currentTime -= 5;},false);
    adelantar.addEventListener('click', function(){video.currentTime += 5;},false);

}

window.addEventListener('DOMContentLoaded',init,false);