document.getElementById('submit').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const matricula = document.getElementById('matricula').value;
    const imageUrl = document.getElementById('image-url').value;
    const comment = document.getElementById('comment').value;

    if (name && matricula && imageUrl && comment) {
        const commentsContainer = document.getElementById('comments-container');

        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <div>
                <div class="comment-header">${name} (${matricula})</div>
                <div>${comment}</div>
            </div>
        `;

        commentsContainer.appendChild(newComment);

        // Limpar os campos de entrada
        document.getElementById('name').value = '';
        document.getElementById('matricula').value = '';
        document.getElementById('image-url').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
