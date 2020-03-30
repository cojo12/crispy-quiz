const playButton = document.getElementById('play-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const  questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
var score = 0
let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})


function playGame() {
    console.log('Started')
    playButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion() 
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild 
            (answerButtonsElement.firstChild)
        }
    }

function selectAnswer() {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } 
} 

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'How many months in a year?',
        answers: [
            { text: '21', correct: false},
            { text: '11', correct: false},
            { text: '12', correct: true},
            { text: '20', correct: false},
        ]
    },
    {
        question: 'How many weeks in a year?',
        answers: [
            {text: '52', correct: true},
            {text: '59', correct: false},
            {text: '12', correct: false},
            {text: '69', correct: false},
        ]
    },
    {
        question: 'How many hours in a day?',
        answers: [
            {text: '12', correct: false},
            {text: '24', correct: true},
            {text: '1', correct: false},
            {text: '48', correct: false},
        ]
    }
]

