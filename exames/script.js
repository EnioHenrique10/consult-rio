const pessoas = [
    { nome: "Alice", resultado: "Aprovada" },
    { nome: "Bruno", resultado: "Reprovado" },
    { nome: "Carla", resultado: "Aprovada" },
    { nome: "Diego", resultado: "Aprovada" },
    { nome: "Eva", resultado: "Reprovada" }
];

document.getElementById("gerarResultados").addEventListener("click", () => {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores

    pessoas.forEach(pessoa => {
        const div = document.createElement("div");
        div.className = "resultado";
        div.textContent = `${pessoa.nome}: ${pessoa.resultado}`;
        resultadosDiv.appendChild(div);
    });
});
