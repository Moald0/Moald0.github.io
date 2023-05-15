// Definerer en liste med spørsmål og svaralternativer som quizData
const quizData = [
    {
        question: "Hva er formelen for en kuleflate?",
        a: "Finnes ikke",
        b: "(x-x0)^2+(y-y0)^2+(z-z0)^2=r^2",
        c: "(x+x0)^2-(y+y0)^2-(z+z0)^2=r^2",
        d: "Umulig å vite, dersom vi ikke har fått avstanden",
        correct: "b",
    },
    {
        question: "Hvor mange formler for avstand finnes det?",
        a: "3",
        b: "1",
        c: "2",
        d: "Ingen",
        correct: "c",
    },
    {
        question: "Hvordan finner man ut om vektor u og v er ortogonale??",
        a: "cos(u)*cos(v)",
        b: "u*v",
        c: "u*v=0",
        d: "Derivere u og v og finne avstanden mellom dem",
        correct: "c",
    },
];
// Henter referanser til HTML-elementene
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// Setter initialverdier for quiz (starter på 0 rette f.eks)
let currentQuiz = 0
let score = 0

// Laster inn quizen (første spm og svarlaternativ)
loadQuiz()
// Funksjon for å laste inn et nytt spørsmål og svaralternativer
function loadQuiz() {
    deselectAnswers() // Fjern markering fra valgte svaralternativer
    const currentQuizData = quizData[currentQuiz] // Henter data for nåværende spørsmål fra quizData
    // Setter teksten for spørsmålet og svaralternativene i HTML-elementene
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
// Funksjon for å fjerne markering fra alle svaralternativer
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
// Funksjon for å hente ut id-en til det valgte svaralternativet
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
// Legger til en "click" hendelse på knappen "submitBtn" for å sjekke om svaret er valgt
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) { // Hvis et svar er valgt
       if(answer === quizData[currentQuiz].correct) { // Sjekker om svaret er riktig
           score++ //Hvis det er riktig øker poengscoren med 1
       }
       currentQuiz++ // Går videre til neste spørsmål
       //Hvis det er flere spørsmål i quizen laster det opp et nytt spørsmål
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        // Hvis det ikke er felere spørsmål, viser det en oppsummering av resultatet og en knapp for å starte quizen på nytt
           quiz.innerHTML = `
           <h2>Du svarte ${score}/${quizData.length} spørsmål riktig</h2>
           <button onclick="location.reload()">Start på nytt?</button>
           `
       }
    }
})