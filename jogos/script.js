const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');

const questions = [
    {
        question: "Qual é o primeiro passo para garantir um bom atendimento ao paciente na recepção?",
        answers: [
            { text: "A) Oferecer água", correct: false },
            { text: "B) Cumprimentar com cordialidade", correct: true },
            { text: "C) Pedir documentos imediatamente", correct: false },
            { text: "D) Pedir para aguardar sem explicações", correct: false }
        ]
    },
    {
        question: "Qual é o documento mais solicitado na recepção de um hospital público?",
        answers: [
            { text: "A) CPF", correct: false },
            { text: "B) Carteira de Identidade", correct: false },
            { text: "C) Cartão do SUS", correct: true },
            { text: "D) Comprovante de residência", correct: false }
        ]
    },
    {
        question: "Qual é o horário padrão de funcionamento de uma recepção hospitalar?",
        answers: [
            { text: "A) 8h às 18h", correct: false },
            { text: "B) 24 horas por dia", correct: true },
            { text: "C) 6h às 22h", correct: false },
            { text: "D) 9h às 17h", correct: false }
        ]
    },
    {
        question: "Qual é a atitude correta ao receber um paciente em estado de emergência?",
        answers: [
            { text: "A) Pedir para aguardar a senha ser chamada", correct: false },
            { text: "B) Chamar o médico imediatamente", correct: false },
            { text: "C) Encaminhá-lo para a triagem de emergência", correct: true },
            { text: "D) Solicitar documentos antes de qualquer ação", correct: false }
        ]
    },
    {
        question: "Qual é o documento padrão para que o paciente seja admitido em uma internação?",
        answers: [
            { text: "A) Comprovante de endereço", correct: false },
            { text: "B) Carteirinha do plano de saúde", correct: false },
            { text: "C) Certidão de nascimento", correct: false },
            { text: "D) Identidade ou CPF", correct: true }
        ]
    },
    {
        question: "O que significa sigla TMO no ambiente hospitalar?",
        answers: [
            { text: "A) Tratamento Médico Ordinário", correct: false },
            { text: "B) Transplante de Medula Óssea", correct: true },
            { text: "C) Terapia Médica Oncológica", correct: false },
            { text: "D) Triagem de Medicação Oftalmológica", correct: false }
        ]
    },
    {
        question: "Qual é a principal qualidade de um recepcionista hospitalar eficiente?",
        answers: [
            { text: "A) Habilidade técnica", correct: false },
            { text: "B) Paciência e empatia", correct: true },
            { text: "C) Velocidade no atendimento", correct: false },
            { text: "D) Rigor com horários", correct: false }
        ]
    },
    {
        question: "O que significa a sigla CRM que os recepcionistas utilizam ao registrar a presença de um médico?",
        answers: [
            { text: "A) Cadastro de Recepção Médica", correct: false },
            { text: "B) Conselho Regional de Medicina", correct: true },
            { text: "C) Cuidado de Registros Médicos", correct: false },
            { text: "D) Controle de Registros de Medicação", correct: false }
        ]
    },
    {
        question: "Quando o recepcionista deve utilizar a técnica de 'escuta ativa'?",
        answers: [
            { text: "A) Ao atender ligações", correct: false },
            { text: "B) Ao registrar os documentos", correct: false },
            { text: "C) Ao lidar com reclamações de pacientes", correct: true },
            { text: "D) Ao chamar o paciente para atendimento", correct: false }
        ]
    },
    {
        question: "Durante o treinamento, é ensinado que o tempo ideal de resposta a uma dúvida do paciente na recepção deve ser:",
        answers: [
            { text: "A) Imediato", correct: false },
            { text: "B) Em até 1 minuto", correct: false },
            { text: "C) Em até 5 minutos", correct: false },
            { text: "D) O mais breve possível, respeitando a complexidade da situação", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setNextQuestion();
        } else {
            showResult("Parabéns! Você respondeu todas as perguntas corretamente!");
        }
    } else {
        showResult("Você errou! Tente novamente.");
    }
}

function showResult(message) {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultElement.innerText = message;
}

restartButton.addEventListener('click', () => {
    resultContainer.classList.add('hidden');
    startButton.classList.remove('hidden');
});
