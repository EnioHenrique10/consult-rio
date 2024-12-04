document.getElementById('imageInput').addEventListener('change', function(event) {
    const imageContainer = document.getElementById('imageContainer');
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.appendChild(img);
        }

        reader.readAsDataURL(file);
    }

    // Limpa o campo de input após o upload
    event.target.value = '';
});
