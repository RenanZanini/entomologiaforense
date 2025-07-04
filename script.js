// Estado global do quiz
let quizState = {
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    score: 0,
    difficulty: '',
    studentName: '',
    startTime: null,
    endTime: null
};

// Elementos DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

// Elementos da tela inicial
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const studentNameInput = document.getElementById('student-name');
const startQuizBtn = document.getElementById('start-quiz');

// Elementos da tela do quiz
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const currentDifficultySpan = document.getElementById('current-difficulty');
const currentScoreSpan = document.getElementById('current-score');
const progressFill = document.querySelector('.progress-fill');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextQuestionBtn = document.getElementById('next-question');
const quitQuizBtn = document.getElementById('quit-quiz');

// Elementos da tela de resultados
const resultsStudentName = document.getElementById('results-student-name');
const resultsDifficulty = document.getElementById('results-difficulty');
const finalScore = document.getElementById('final-score');
const maxScore = document.getElementById('max-score');
const scorePercentage = document.getElementById('score-percentage');
const correctAnswers = document.getElementById('correct-answers');
const totalAnswered = document.getElementById('total-answered');
const totalTime = document.getElementById('total-time');
const performanceMessage = document.getElementById('performance-message');
const restartQuizBtn = document.getElementById('restart-quiz');
const printResultsBtn = document.getElementById('print-results');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

function initializeQuiz() {
    // Event listeners para seleção de dificuldade
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove seleção anterior
            difficultyButtons.forEach(b => b.classList.remove('selected'));
            // Adiciona seleção atual
            this.classList.add('selected');
            quizState.difficulty = this.dataset.difficulty;
            
            // Habilita o botão de iniciar
            startQuizBtn.disabled = false;
        });
    });

    // Event listener para iniciar quiz
    startQuizBtn.addEventListener('click', startQuiz);

    // Event listeners para controles do quiz
    nextQuestionBtn.addEventListener('click', nextQuestion);
    quitQuizBtn.addEventListener('click', quitQuiz);

    // Event listeners para tela de resultados
    restartQuizBtn.addEventListener('click', restartQuiz);
    printResultsBtn.addEventListener('click', printResults);
}

function startQuiz() {
    // Captura nome do estudante
    quizState.studentName = studentNameInput.value.trim() || 'Estudante';
    
    // Carrega perguntas baseadas na dificuldade
    quizState.questions = getQuestionsByDifficulty(quizState.difficulty, 10);
    
    // Embaralha respostas de cada pergunta
    quizState.questions = quizState.questions.map(q => shuffleAnswers(q));
    
    // Reseta estado
    quizState.currentQuestionIndex = 0;
    quizState.answers = [];
    quizState.score = 0;
    quizState.startTime = new Date();
    
    // Atualiza interface
    totalQuestionsSpan.textContent = quizState.questions.length;
    currentDifficultySpan.textContent = getDifficultyLabel(quizState.difficulty);
    
    // Muda para tela do quiz
    showScreen('quiz');
    
    // Carrega primeira pergunta
    loadQuestion();
}

function loadQuestion() {
    const question = quizState.questions[quizState.currentQuestionIndex];
    
    // Atualiza informações da pergunta
    currentQuestionSpan.textContent = quizState.currentQuestionIndex + 1;
    questionCategory.textContent = question.category;
    questionText.textContent = question.question;
    
    // Atualiza barra de progresso
    const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Carrega respostas
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer.text;
        answerBtn.dataset.correct = answer.correct;
        answerBtn.dataset.index = index;
        
        answerBtn.addEventListener('click', selectAnswer);
        
        answersContainer.appendChild(answerBtn);
    });
    
    // Desabilita botão próxima
    nextQuestionBtn.disabled = true;
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    
    // Desabilita todos os botões
    const allAnswerBtns = document.querySelectorAll('.answer-btn');
    allAnswerBtns.forEach(btn => {
        btn.classList.add('disabled');
        btn.removeEventListener('click', selectAnswer);
        
        // Marca resposta correta
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });
    
    // Marca resposta selecionada
    selectedBtn.classList.add('selected');
    if (!isCorrect) {
        selectedBtn.classList.add('incorrect');
    }
    
    // Registra resposta
    quizState.answers.push({
        questionId: quizState.questions[quizState.currentQuestionIndex].id,
        selectedAnswer: selectedBtn.textContent,
        correct: isCorrect
    });
    
    // Atualiza pontuação
    if (isCorrect) {
        const points = getPointsForDifficulty(quizState.difficulty);
        quizState.score += points;
        currentScoreSpan.textContent = quizState.score;
    }
    
    // Habilita botão próxima
    nextQuestionBtn.disabled = false;
    
    // Se é a última pergunta, muda texto do botão
    if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
        nextQuestionBtn.textContent = 'Ver Resultados';
    }
}

function nextQuestion() {
    quizState.currentQuestionIndex++;
    
    if (quizState.currentQuestionIndex < quizState.questions.length) {
        loadQuestion();
        nextQuestionBtn.textContent = 'Próxima Pergunta';
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizState.endTime = new Date();
    showResults();
    showScreen('results');
}

function showResults() {
    // Informações do estudante
    resultsStudentName.textContent = quizState.studentName;
    resultsDifficulty.textContent = getDifficultyLabel(quizState.difficulty);
    
    // Pontuação
    const maxPossibleScore = quizState.questions.length * getPointsForDifficulty(quizState.difficulty);
    finalScore.textContent = quizState.score;
    maxScore.textContent = maxPossibleScore;
    
    const percentage = Math.round((quizState.score / maxPossibleScore) * 100);
    scorePercentage.textContent = percentage + '%';
    
    // Estatísticas
    const correctCount = quizState.answers.filter(a => a.correct).length;
    correctAnswers.textContent = correctCount;
    totalAnswered.textContent = quizState.answers.length;
    
    // Tempo total
    const timeDiff = quizState.endTime - quizState.startTime;
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    totalTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Mensagem de performance
    performanceMessage.textContent = getPerformanceMessage(percentage);
}

function getPerformanceMessage(percentage) {
    if (percentage >= 90) {
        return 'Excelente! Você domina muito bem a entomologia forense!';
    } else if (percentage >= 80) {
        return 'Muito bom! Você tem um bom conhecimento sobre o assunto.';
    } else if (percentage >= 70) {
        return 'Bom trabalho! Continue estudando para aprimorar seus conhecimentos.';
    } else if (percentage >= 60) {
        return 'Razoável. Recomenda-se revisar os conceitos básicos.';
    } else {
        return 'É necessário estudar mais sobre entomologia forense.';
    }
}

function getPointsForDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy': return 5;
        case 'medium': return 8;
        case 'hard': return 10;
        case 'mixed': return 7;
        default: return 5;
    }
}

function getDifficultyLabel(difficulty) {
    switch (difficulty) {
        case 'easy': return 'Fácil';
        case 'medium': return 'Médio';
        case 'hard': return 'Difícil';
        case 'mixed': return 'Misto';
        default: return 'Fácil';
    }
}

function quitQuiz() {
    if (confirm('Tem certeza que deseja sair do quiz? Seu progresso será perdido.')) {
        restartQuiz();
    }
}

function restartQuiz() {
    // Reseta estado
    quizState = {
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        score: 0,
        difficulty: '',
        studentName: '',
        startTime: null,
        endTime: null
    };
    
    // Reseta interface
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    studentNameInput.value = '';
    startQuizBtn.disabled = true;
    nextQuestionBtn.textContent = 'Próxima Pergunta';
    currentScoreSpan.textContent = '0';
    
    // Volta para tela inicial
    showScreen('home');
}

function printResults() {
    window.print();
}

function showScreen(screenName) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostra tela solicitada
    const targetScreen = document.getElementById(screenName + '-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Função para salvar resultados (opcional)
function saveResults() {
    const results = {
        studentName: quizState.studentName,
        difficulty: quizState.difficulty,
        score: quizState.score,
        totalQuestions: quizState.questions.length,
        correctAnswers: quizState.answers.filter(a => a.correct).length,
        date: new Date().toISOString(),
        answers: quizState.answers
    };
    
    // Salva no localStorage
    const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    savedResults.push(results);
    localStorage.setItem('quizResults', JSON.stringify(savedResults));
    
    return results;
}

// Função para carregar resultados salvos (opcional)
function loadSavedResults() {
    return JSON.parse(localStorage.getItem('quizResults') || '[]');
}

