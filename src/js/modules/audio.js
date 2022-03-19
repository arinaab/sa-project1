const audio = () => {
    const btnPlay = document.querySelectorAll('.audio__play'),
          player1 = document.querySelector('.audio-1'),
          player2 = document.querySelector('.audio-2'),
          progressContainer = document.querySelectorAll('.audio__slider'),
          progress = document.querySelectorAll('.audio__progress'),
          audio = document.querySelectorAll('audio');

    // let myAudio = new Audio('./assets/audio/Radiohead-Paranoid-Android.mp3');

    let songs = ['Bloc Party-Hunting for Witches', 'Bloc Party-Waiting for the 7.18', 'Bloc Party-Where is Home', 
        'Radiohead-Karma Police', 'Radiohead-No Surprises', 'Radiohead-Paranoid-Android'];

    btnPlay.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('paused');
            
            const isPlaying = player1.classList.contains('play') && player2.classList.contains('play');

            if (isPlaying) {
                pauseSong();
            } else {
                playAudio();
            }
            
        });
    });

    //проигрывание песни
    function playAudio() {
        player1.classList.add('play');
        player2.classList.add('play');

        audio.forEach(item => {
            item.play();
        });
    }

    //остановка песни
    function pauseSong() {
        player1.classList.remove('play');
        player2.classList.remove('play');

        audio.forEach(item => {
            item.pause();
        });
    }

    //ползунок прогресса
    function updateProgress(e) {
        const {duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.forEach(item => item.style.width = `${progressPercent}%`);

        // const time = (duration / 60).toFixed(2);

        // document.querySelectorAll('.audio__duration span').forEach(item => {
        //     item.textContent = time;
        // });
    }

    audio.forEach(item => {
        item.addEventListener('timeupdate', updateProgress);
    });

    //переключение ползунка
    function setProgress(e) {
        const width = this.clientWidth; //ширина элемента
        const clickX = e.offsetX;
        
        audio.forEach(item => {
            const duration = item.duration;
            item.currentTime = (clickX / width) * duration;
        });
    }

    progressContainer.forEach(item => {
        item.addEventListener('click', setProgress);
    });
};

export default audio;