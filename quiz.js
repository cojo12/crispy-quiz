const playButton = document.getElementById('play-btn')
const questionContainerElement = document.getElementById ('question-container')
const  questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click', playGame)


function playGame() {
    console.log('Started')
    playButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion() 
}

function setNextQuestion() {
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

function selectAnswer() {

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
    }
]