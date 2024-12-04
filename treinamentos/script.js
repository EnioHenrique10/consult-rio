const employees = [
    { name: "Alice", registration: "1234", score: 85 },
    { name: "Bob", registration: "5678", score: 78 },
    { name: "Charlie", registration: "9101", score: 92 },
    { name: "Diana", registration: "1121", score: 74 },
    { name: "Edward", registration: "3141", score: 88 },
];

// Preencher a tabela com dados dos funcionários
const tableBody = document.getElementById('employeeScores');
employees.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><a href="#" class="employee-link" data-name="${employee.name}" data-registration="${employee.registration}" data-score="${employee.score}">${employee.name}</a></td>
        <td>${employee.registration}</td>
        <td>${employee.score}</td>
    `;
    tableBody.appendChild(row);
});

// Exibir detalhes do treinamento ao clicar no nome do funcionário
const employeeLinks = document.querySelectorAll('.employee-link');
employeeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const name = e.target.dataset.name;
        const registration = e.target.dataset.registration;
        const score = e.target.dataset.score;

        const trainingDetails = document.getElementById('trainingDetails');
        trainingDetails.innerHTML = `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Matrícula:</strong> ${registration}</p>
            <p><strong>Pontuação:</strong> ${score}</p>
            <p><strong>Detalhes do Treinamento:</strong> A funcionário ${name} completou o treinamento com sucesso.</p>
        `;
    });
});
