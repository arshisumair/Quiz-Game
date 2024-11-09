const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C", "JavaScript", "Ruby"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById('options-container');
    const optionButtons = optionsContainer.getElementsByTagName('button');

    for (let i = 0; i < currentQuestion.options.length; i++) {
        optionButtons[i].textContent = currentQuestion.options[i];
    }

    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

function selectAnswer(optionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (optionIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = "Correct!";
    } else {
        document.getElementById('feedback').textContent = "Wrong!";
    }

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('score-container').classList.remove('hidden');
    document.getElementById('final-score').textContent = score;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

loadQuestion();
