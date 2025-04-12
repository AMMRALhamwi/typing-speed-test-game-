// arrray of words
const words = [
  "love",
  "code",
  "javascript",
  "university",
  "romance",
  "programming",
  "web",
  "education",
  "passion",
  "development",
  "browser",
  "learning",
  "affection",
  "coding",
  "frontend",
  "knowledge",
  "heart",
  "debugging",
  "backend",
  "degree",
  "embrace",
  "algorithm",
  "scripting",
  "classroom",
  "connection",
  "software",
  "study",
  "commitment",
  "syntax",
  "internet",
  "scholarship",
  "devotion",
  "logic",
  "online",
  "graduation",
  "feelings",
  "function",
  "API",
  "discipline",
  "flirt",
  "variable",
  "framework",
  "professor",
  "sweetheart",
  "loop",
  "DOM",
  "campus",
  "relationship",
  "bug",
  "server",
  "thesis",
  "partner",
];

// levels settings
const levels = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

// default level
let defaultLevelName = "Normal"; // the level can be changed from here
let defaultLevelSeconds = levels[defaultLevelName];

// catch selectors
let startButton = document.querySelector(".start");
let levelNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theword = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftspan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
console.log(finishMessage);

// Setting level name & Seconds & score
levelNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftspan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// to disable past event
input.onpaste = function () {
  return false;
};

// start the game
startButton.onclick = function () {
  this.remove();
  input.focus();
  // genrate word fucntion
  genWords();
};
//  genrate Words function ()
function genWords() {
  // get random word from array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  // get word index
  let wordIndex = words.indexOf(randomWord);
  console.log(wordIndex);
  // remove word from array
  words.splice(wordIndex, 1);
  // show the random word
  theword.innerHTML = randomWord;
  // empty upcoming words
  upcomingWords.innerHTML = "";
  // genrate upcoming words
  for (let i = 0; i < words.length; i++) {
    // create div element
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    upcomingWords.appendChild(div);
  }
  // call start playing function
  startPlaying();
}

// start playing function
function startPlaying() {
  timeLeftspan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftspan.innerHTML--;
    if (timeLeftspan.innerHTML === "0") {
      // stop timer
      clearInterval(start);
      // compare words
      if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // empty input feild
        input.value = "";
        // increase score
        scoreGot.innerHTML++;
        // to check if the array is empty or we still have more words
        if (words.length > 0) {
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spanText = document.createTextNode("congrats");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // remove upcoming words box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
