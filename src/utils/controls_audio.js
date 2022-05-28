

function onClickPause_Play (){
    let musica_principal = document.querySelector(".audio_alice_principal");
    let icon_music = document.querySelector(".nav-container-icon__song");
    
    if(icon_music.classList.contains('play')){
        icon_music.classList.remove('play')
        icon_music.classList.add('pause');
        icon_music.style.backgroundImage = "url(./src/assets/images/icons/no-song.png";
        musica_principal.pause();
    }else{
        icon_music.classList.remove('pause')
        icon_music.classList.add('play');
        icon_music.style.backgroundImage = "url(./src/assets/images/icons/sonido.png"
        musica_principal.play();
    }

    

}