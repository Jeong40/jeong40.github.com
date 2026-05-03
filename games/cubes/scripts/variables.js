const gameWindow = document.getElementById('gameWindow');
const gameContainer = document.getElementById('gameContainer');
const confirmBtn = document.getElementById('confirmBtn');
const display = document.getElementById('display');
const btnContent = document.getElementById('btnContent');
const untouchableWindow = document.getElementById('untouchableWindow');

const c = gameWindow.getContext('2d');

let isRunning = false;
let keyPosition;
let score = 0;
let timeout;