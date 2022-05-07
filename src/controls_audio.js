

function onClickPause_Play (){
    let musica_principal = document.querySelector(".audio_alice_principal");
    let icon_music = document.querySelector(".img_music");
    
    if(icon_music.classList.contains('play')){
        icon_music.classList.remove('play')
        icon_music.classList.add('pause');
        icon_music.src="./images/no_song.png"
        musica_principal.pause();
    }else{
        icon_music.classList.remove('pause')
        icon_music.classList.add('play');
        icon_music.src="./images/sonido.png"
        musica_principal.play();
    }

    

}