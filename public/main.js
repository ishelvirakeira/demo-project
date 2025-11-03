// Local "starter API" (sample riddles)// will also do some english translations
const riddles = [
  {
    id: 1,
    text: "Ndi mugiraneza muvyara w’urupfu",
    options: ["Itiro", "Uburuhe", "Umuryango"],
    answer: "Itiro"
  },
  {
    id: 2,
    text: "Ico utazi utabonye",
    options: ["Ubugeni bwa so na nyoko", "Ubukumi bwa nyoko", "Sokuru"],
    answer: "Ubugeni bwa so na nyoko canke Ubukumi bwa nyoko"
  },
  {
    id: 3,
    text: "Iyo tuva turyoha duhambwe.",
    options: ["Imihwi", "Imicungwe", "Imikaratusi"],
    answer: "Imihwi"
  }
];

let currentRiddle = 0;

const riddleText = document.querySelector('#riddle1');
const optionsDiv = document.querySelector('#options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('button');

//showing riddle
function showRiddle() {
  const riddle = riddles[currentRiddle];
  riddleText.textContent = riddle.text;
  optionsDiv.innertext = "";//check this again
  feedback.textContent = "";

  riddle.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = riddles[currentRiddle].answer;
  if (selected === correct) {
    feedback.textContent = "Correct!";
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = `Wrong! The correct answer is "${correct}".`;
    feedback.style.color = "orange";
   
  }
}
//next riddle: let's use condition if. ref: https://codepen.io/tgrowden/pen/pepzjg?anon=true&view=pen
nextBtn.addEventListener('click', () => {
  currentRiddle++;
  if (currentRiddle >= riddles.length) {
    currentRiddle = 0;
  }
  showRiddle();
});

