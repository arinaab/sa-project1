const audio = (triggerSelector) => {
    const btnPlay = document.querySelectorAll(triggerSelector);

    let myAudio = new Audio('./assets/audio/Radiohead-Paranoid-Android.mp3');

    btnPlay.forEach(btn => {
        btn.addEventListener('click', () => {
            myAudio.play();
            btn.classList.toggle('paused');
    
            btn.addEventListener('click', () => {
                myAudio.pause();
            });
        });
    });

};

export default audio;