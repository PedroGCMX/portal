function revealPhotos() {
    const photoGallery = document.querySelector('.galeria');
    const title = document.querySelector('.box-title');
    const msg = document.getElementById("msg-dica");
    const audio = document.getElementById("myAudio");

    if(audio.paused) {
        audio.play();
    } else {
        audio.pause()
    }

    title.classList.add('visible');
    photoGallery.classList.add('visible');
    msg.style.display = 'none';
}
