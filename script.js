// DOM Elements
const inputField = document.getElementById("answer-input");
const questionTitle = document.getElementById("question-title");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const questionContainer = document.getElementById("question-container");
const collectedLetterContainer = document.getElementById("letter-container");

const FINAL_WORD = "SKRIVARE";
const QUESTIONS = [
  "Med tre småttingar får jag reda på allt<br> varesig solsken, varmt eller kallt <br><br> För nästa lapp ni hittar vid mig <br> men kolla då bakom, ej min display",
  "Nio strålande vänner jag håller <br> men ännu fler inom mig jag behåller <br><br> Undvik all värme och lågornas eld <br> ni finner då lappen när jag är uppfälld",
  "I dessa tider fina gåvor vi ger <br> men behöver då omslag så vi klappen ej ser <br><br> Men utan mitt hjälp allt faller isär <br> en bit eller två, ja alla jag skär",
  "En sista lapp att finna ni har <br> men för att den hitta ni får kolla mitt kar<br><br> En salig samling av många små gryn <br> en bra start på dagen men syns sällan på menyn",
];
const ANSWERS = [1, 2, 3, 4];

let currentQuestionIndex = 0;
const shuffledLetters = shuffle(FINAL_WORD);
const userLetters = [];

function shuffle(word) {
  const firstShuffle = word.split("").sort(() => Math.random() - 0.5);
  return firstShuffle.sort(() => Math.random() - 0.5);
}

function updateLetterContainer() {
  collectedLetterContainer.innerText = userLetters.join(" ");
}

function updateQuestion() {
  questionTitle.innerHTML = `Lapp #${currentQuestionIndex + 1}`;
  questionText.innerHTML = `${QUESTIONS[currentQuestionIndex]}`;
}

function checkAnswer() {
  const userAnswer = parseInt(inputField.value);

  if (!isNaN(userAnswer) && userAnswer === ANSWERS[currentQuestionIndex]) {
    questionTitle.innerText = "Rätt svar 🎉";

    setTimeout(() => {
      resultContainer.innerText = "";

      userLetters.push(shuffledLetters.pop());
      userLetters.push(shuffledLetters.pop());

      updateLetterContainer();
      currentQuestionIndex++;

      if (currentQuestionIndex < QUESTIONS.length) {
        updateQuestion();
        inputField.value = "";
      } else {
        questionContainer.innerHTML =
          "<p>Samtliga lappar klarade, hitta ordet bland bokstäverna 👇</p>";
      }
    }, 1000);
  } else {
    resultContainer.innerText = "Felaktigt svar";
  }
}

function initQuestions() {
  updateQuestion();
}

initQuestions();
