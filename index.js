window.addEventListener('load', init);



let time = 4;
let score = 0;
let isPlaying;


const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}



const currentLevel = levels.medium;



const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const messageDisplay = document.getElementById('message');
const seconds = document.getElementById('seconds');

const words = [
  'земля',
  'чхання',
  'битва',
  'план',
  'язик',
  'шокуючий',
  'кітті',
  'сестри',
  'Бетмен',
  'океанічний',
  'школа',
  'цент',
  'апельсини',
  'напряжений',
  'парус',
  'війна',
  'дамба',
  'бідний',
  'слід',
  'медуза',
  'економний',
  'тремтливий',
  'попереджати',
  'шкідник',
  'річ',
  'божевільний',
  'глянцевий',
  'будинки',
  'чоловік',
  'чарівний',
  'блідий',
  'скло',
  'відображати',
  'пил',
  'прикріпити',
  'вдалий',
  'славетний',
  'барабан',
  'підступний',
  'правильний',
  'поховати',
  'відразливий',
  'привабливо',
  'хропіння',
  'сила',
  'вправи',
  'піднімати',
  'матеріалістичний',
  'ремонтувати'
];



function init() {

  seconds.innerHTML = currentLevel + ' seconds';

  showWord(words);

  wordInput.addEventListener('input', startMatch);


  setInterval(checkStatus, 50);
}


function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}



function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    messageDisplay.innerHTML = 'Правильно!!!';
    messageDisplay.style.color = 'green';
    return true;
  } else {
    messageDisplay.innerHTML = '';
    return false;
  }
}





function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];

}


function countdown() {

  if (time > 0) {

    time--;
  }
  else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}


function checkStatus() {
  if (!isPlaying && time === 0) {
    messageDisplay.innerHTML = 'Гра закінчена !!!';
    score = 0;
    messageDisplay.style.color = 'red';
  }
}