// Definerer en liste med spørsmål og svaralternativer som quizData
const quizData = [
    {
        question: "Hva må vi først gjøre når vi skal bevise et utsagn?",
        a: "Vi må vise en implikasjon",
        b: "Sette n for k",
        c: "Bruke antakelsen",
        d: "Sjekke om n=1 stemmer på høyre og venstre side",
        correct: "d",
    },
    {
        question: "Når konvergerer en geometrisk rekke?",
        a: "Ved 90 grader",
        b: "Når -1<k<1",
        c: "Når 1>k<-1",
        d: "Når-1>k>1",
        correct: "b",
    },
    {
        question: "Hva er formelen for en aritmetisk rekke?",
        a: "an=a1+d",
        b: "an=a1+(n-1)*d",
        c: "a1=an+d",
        d: "an=a1+d*n",
        correct: "b",
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