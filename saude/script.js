// Obtém todos os elementos de vídeo e áudio
const videos = document.querySelectorAll('video');
const audios = document.querySelectorAll('audio');

// Adiciona um evento para mostrar uma mensagem quando um vídeo ou áudio começa a tocar

// Adiciona eventos de 'play' a cada vídeo
videos.forEach(video => {
    video.addEventListener('play', () => {
        showPlayingMessage('vídeo', video);
    });
});

// Adiciona eventos de 'play' a cada áudio
audios.forEach(audio => {
    audio.addEventListener('play', () => {
        showPlayingMessage('áudio', audio);
    });
});
