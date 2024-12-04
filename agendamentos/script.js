document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `<p>Compromisso agendado com sucesso!</p>
                                  <p><strong>Nome:</strong> ${name}</p>
                                  <p><strong>E-mail:</strong> ${email}</p>
                                  <p><strong>Data:</strong> ${date}</p>
                                  <p><strong>Hora:</strong> ${time}</p>`;
    confirmationDiv.classList.remove('hidden');
    document.getElementById('appointmentForm').reset();
});
