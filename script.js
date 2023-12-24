const questions = [
    "Med tre småttingar får jag reda på allt<br> varesig solsken, varmt eller kallt <br><br> För nästa lapp ni hittar vid mig <br> men kolla då bakom, ej min display",
    "Nio strålande vänner jag håller <br> men ännu fler inom mig jag behåller <br><br> Undvik all värme och lågornas eld <br> ni finner då lappen när jag är uppfälld",
    "I dessa tider fina gåvor vi ger <br> men behöver då omslag så vi klappen ej ser <br><br> Men utan mitt hjälp allt faller isär <br> en bit eller två, ja alla jag skär",
    "En sista lapp att finna ni har <br> men för att den hitta ni får kolla mitt kar<br><br> En salig samling av många små gryn <br> en bra start på dagen men syns sällan på menyn"
];

let currentQuestionIndex = 0;
const correctAnswers = [9,23,11,4];
let shuffledLetters = shuffle("SKRIVARE");
let userLetters = "";

function shuffle(word) {
    const firstShuffle = word.split('').sort(() => Math.random() - 0.5);
    return firstShuffle.sort(() => Math.random() - 0.5);
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer-input").value);

    if (!isNaN(userAnswer) &&  userAnswer === correctAnswers[currentQuestionIndex]) {
        document.getElementById("question-title").innerText = "Rätt svar 🎉";

        setTimeout(() => {
            document.getElementById("result-container").innerText = "";

            userLetters += shuffledLetters.pop();
            userLetters += shuffledLetters.pop();

            updateLetterContainer();
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                document.getElementById("question-title").innerHTML = `Lapp #${currentQuestionIndex +1}`;
                document.getElementById("question-text").innerHTML = `${questions[currentQuestionIndex]}`;
                document.getElementById("answer-input").value = "";
            } else {
                document.getElementById("question-container").innerHTML = "<p>Samtliga lappar klarade, hitta ordet bland bokstäverna 👇</p>";
            }
        }, 1000);
    } else {
        document.getElementById("result-container").innerText = "Felaktigt svar";
    }
}

function updateLetterContainer() {
    document.getElementById("letter-container").innerText = userLetters;
}
