const employees = [
    { name: "Will", registration: "1234", performance: 85 },
    { name: "Bob", registration: "5678", performance: 78 },
    { name: "Charlie", registration: "9101", performance: 92 },
    { name: "Diana", registration: "1121", performance: 74 },
    { name: "Edward", registration: "3141", performance: 88 },
];

// Preencher a tabela com dados dos funcionários
const tableBody = document.getElementById('employeeTableBody');
employees.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.registration}</td>
        <td>${employee.performance}</td>
    `;
    tableBody.appendChild(row);
});

// Criar o gráfico de desempenho
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employees.map(e => e.name),
        datasets: [{
            label: 'Desempenho (%)',
            data: employees.map(e => e.performance),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
