// Banco de dados de perguntas de Entomologia Forense
const questionsDatabase = {
    easy: [
        {
            id: 1,
            category: "Conceitos Básicos",
            question: "O que é entomologia forense?",
            answers: [
                { text: "O estudo de insetos e artrópodes em investigações criminais", correct: true },
                { text: "O estudo de plantas em cenas de crime", correct: false },
                { text: "O estudo de pegadas de animais", correct: false },
                { text: "O estudo de impressões digitais", correct: false }
            ]
        },
        {
            id: 2,
            category: "Conceitos Básicos",
            question: "Qual é o principal objetivo da entomologia forense?",
            answers: [
                { text: "Determinar o intervalo pós-morte (IPM)", correct: true },
                { text: "Identificar o assassino", correct: false },
                { text: "Encontrar a arma do crime", correct: false },
                { text: "Determinar a idade da vítima", correct: false }
            ]
        },
        {
            id: 3,
            category: "Insetos",
            question: "Qual ordem de insetos é mais importante na entomologia forense?",
            answers: [
                { text: "Diptera (moscas)", correct: true },
                { text: "Lepidoptera (borboletas)", correct: false },
                { text: "Hymenoptera (abelhas)", correct: false },
                { text: "Orthoptera (gafanhotos)", correct: false }
            ]
        },
        {
            id: 4,
            category: "Conceitos Básicos",
            question: "O que significa IPM em entomologia forense?",
            answers: [
                { text: "Intervalo Pós-Morte", correct: true },
                { text: "Identificação de Pessoa Morta", correct: false },
                { text: "Inseto Primário Morto", correct: false },
                { text: "Investigação Policial Médica", correct: false }
            ]
        },
        {
            id: 5,
            category: "Diptera",
            question: "Qual família de moscas é conhecida como 'moscas-varejeiras'?",
            answers: [
                { text: "Calliphoridae", correct: true },
                { text: "Muscidae", correct: false },
                { text: "Sarcophagidae", correct: false },
                { text: "Drosophilidae", correct: false }
            ]
        },
        {
            id: 6,
            category: "História",
            question: "Em que século foi documentado o primeiro caso de entomologia forense?",
            answers: [
                { text: "Século XIII", correct: true },
                { text: "Século XV", correct: false },
                { text: "Século XVIII", correct: false },
                { text: "Século XX", correct: false }
            ]
        },
        {
            id: 7,
            category: "Desenvolvimento",
            question: "Qual é o primeiro estágio de desenvolvimento das moscas?",
            answers: [
                { text: "Ovo", correct: true },
                { text: "Larva", correct: false },
                { text: "Pupa", correct: false },
                { text: "Adulto", correct: false }
            ]
        },
        {
            id: 8,
            category: "Ecologia",
            question: "Os insetos necrófagos se alimentam de:",
            answers: [
                { text: "Matéria orgânica em decomposição", correct: true },
                { text: "Plantas vivas", correct: false },
                { text: "Apenas sangue", correct: false },
                { text: "Outros insetos vivos", correct: false }
            ]
        }
    ],
    
    medium: [
        {
            id: 9,
            category: "Diptera",
            question: "Qual família de moscas é conhecida por depositar larvas vivas ao invés de ovos?",
            answers: [
                { text: "Sarcophagidae", correct: true },
                { text: "Calliphoridae", correct: false },
                { text: "Muscidae", correct: false },
                { text: "Tachinidae", correct: false }
            ]
        },
        {
            id: 10,
            category: "Fatores Ambientais",
            question: "Qual fator NÃO influencia significativamente o desenvolvimento dos insetos em um cadáver?",
            answers: [
                { text: "Cor dos olhos da vítima", correct: true },
                { text: "Temperatura ambiente", correct: false },
                { text: "Umidade relativa", correct: false },
                { text: "Presença de roupas", correct: false }
            ]
        },
        {
            id: 11,
            category: "Sucessão",
            question: "Em que estágio de decomposição os besouros (Coleoptera) geralmente começam a colonizar o cadáver?",
            answers: [
                { text: "Decomposição avançada", correct: true },
                { text: "Fresco", correct: false },
                { text: "Inchado", correct: false },
                { text: "Imediatamente após a morte", correct: false }
            ]
        },
        {
            id: 12,
            category: "Métodos",
            question: "Qual método é usado para estimar o IPM baseado no desenvolvimento dos insetos?",
            answers: [
                { text: "Graus-dia acumulados", correct: true },
                { text: "Contagem de ovos", correct: false },
                { text: "Peso das larvas", correct: false },
                { text: "Cor das pupas", correct: false }
            ]
        },
        {
            id: 13,
            category: "Toxicologia",
            question: "A presença de drogas no cadáver pode:",
            answers: [
                { text: "Alterar o desenvolvimento dos insetos", correct: true },
                { text: "Não afetar os insetos", correct: false },
                { text: "Apenas atrair mais insetos", correct: false },
                { text: "Matar todos os insetos", correct: false }
            ]
        },
        {
            id: 14,
            category: "Sucessão",
            question: "Qual é a principal diferença entre sucessão primária e secundária em entomologia forense?",
            answers: [
                { text: "Primária usa idade das larvas, secundária usa sequência de espécies", correct: true },
                { text: "Primária é para humanos, secundária para animais", correct: false },
                { text: "Primária é no verão, secundária no inverno", correct: false },
                { text: "Não há diferença", correct: false }
            ]
        },
        {
            id: 15,
            category: "Identificação",
            question: "Qual estrutura das larvas de moscas é mais importante para identificação?",
            answers: [
                { text: "Espiráculos posteriores", correct: true },
                { text: "Cor do corpo", correct: false },
                { text: "Tamanho", correct: false },
                { text: "Velocidade de movimento", correct: false }
            ]
        },
        {
            id: 16,
            category: "História",
            question: "Em que país foi publicado o primeiro livro científico sobre entomologia forense?",
            answers: [
                { text: "França", correct: true },
                { text: "China", correct: false },
                { text: "Brasil", correct: false },
                { text: "Estados Unidos", correct: false }
            ]
        }
    ],
    
    hard: [
        {
            id: 17,
            category: "Espécies Brasileiras",
            question: "Qual espécie de Calliphoridae é considerada indicadora de ambientes urbanos no Brasil?",
            answers: [
                { text: "Chrysomya albiceps", correct: true },
                { text: "Cochliomyia hominivorax", correct: false },
                { text: "Lucilia eximia", correct: false },
                { text: "Chrysomya putoria", correct: false }
            ]
        },
        {
            id: 18,
            category: "Desenvolvimento",
            question: "Qual é o tempo aproximado de desenvolvimento de Chrysomya megacephala a 25°C?",
            answers: [
                { text: "14-16 dias", correct: true },
                { text: "7-9 dias", correct: false },
                { text: "21-25 dias", correct: false },
                { text: "30-35 dias", correct: false }
            ]
        },
        {
            id: 19,
            category: "Identificação",
            question: "Qual característica distingue as larvas de terceiro instar de Cochliomyia hominivorax?",
            answers: [
                { text: "Espiráculos posteriores em forma de D", correct: true },
                { text: "Cor azul metálica", correct: false },
                { text: "Presença de espinhos dorsais", correct: false },
                { text: "Ausência de ganchos bucais", correct: false }
            ]
        },
        {
            id: 20,
            category: "Desenvolvimento",
            question: "Em condições de temperatura constante de 27°C, qual é aproximadamente a duração do estágio pupal de Chrysomya albiceps?",
            answers: [
                { text: "6-7 dias", correct: true },
                { text: "3-4 dias", correct: false },
                { text: "10-12 dias", correct: false },
                { text: "15-18 dias", correct: false }
            ]
        },
        {
            id: 21,
            category: "Métodos Moleculares",
            question: "Qual método molecular é mais utilizado para identificação de espécies em entomologia forense?",
            answers: [
                { text: "Sequenciamento do gene COI", correct: true },
                { text: "Análise de microssatélites", correct: false },
                { text: "PCR-RFLP do gene 16S", correct: false },
                { text: "Sequenciamento do genoma completo", correct: false }
            ]
        },
        {
            id: 22,
            category: "Ecologia",
            question: "Qual é o principal problema da introdução de Chrysomya albiceps no Brasil?",
            answers: [
                { text: "Competição com espécies nativas", correct: true },
                { text: "Transmissão de doenças", correct: false },
                { text: "Destruição de culturas", correct: false },
                { text: "Não há problemas", correct: false }
            ]
        },
        {
            id: 23,
            category: "História",
            question: "Em que década Chrysomya megacephala foi introduzida no Brasil?",
            answers: [
                { text: "1970", correct: true },
                { text: "1950", correct: false },
                { text: "1980", correct: false },
                { text: "1990", correct: false }
            ]
        },
        {
            id: 24,
            category: "Métodos",
            question: "Qual é a principal limitação do uso de graus-dia acumulados em regiões tropicais?",
            answers: [
                { text: "Variação de temperatura ao longo do dia", correct: true },
                { text: "Falta de insetos", correct: false },
                { text: "Excesso de umidade", correct: false },
                { text: "Presença de predadores", correct: false }
            ]
        }
    ]
};

// Função para obter perguntas por dificuldade
function getQuestionsByDifficulty(difficulty, count = 10) {
    let questions = [];
    
    if (difficulty === 'mixed') {
        // Mistura perguntas de todas as dificuldades
        const easyQuestions = questionsDatabase.easy.slice(0, 3);
        const mediumQuestions = questionsDatabase.medium.slice(0, 4);
        const hardQuestions = questionsDatabase.hard.slice(0, 3);
        questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    } else {
        questions = questionsDatabase[difficulty] || [];
    }
    
    // Embaralha as perguntas
    questions = shuffleArray([...questions]);
    
    // Retorna apenas a quantidade solicitada
    return questions.slice(0, count);
}

// Função para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para embaralhar respostas de uma pergunta
function shuffleAnswers(question) {
    const shuffledQuestion = { ...question };
    shuffledQuestion.answers = shuffleArray(question.answers);
    return shuffledQuestion;
}

