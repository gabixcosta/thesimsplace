var audio = new Audio('mp3/music.mp3');
audio.loop = true;

function toggleAudio(){
    var retorno = false; 
    if($('.botao-audio').hasClass('unmute')) {
        audio.pause();
        audio.currentTime = 0;
        retorno = true;       
    } 

    $('.botao-audio').find('i').toggleClass('fa-volume-mute fa-volume-up')
    $('.botao-audio').toggleClass('mute unmute')
    if (retorno)
        return;

    audio.play();
}