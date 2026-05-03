const barBtn = document.getElementById('barBtn');
const nav = document.getElementById('nav');
const lineOne = document.getElementById('lineOne');
const lineTwo = document.getElementById('lineTwo');
const lineThree = document.getElementById('lineThree');

let isSmall = true;
let isOpened = false;

window.addEventListener('resize', () => {
  if (window.innerWidth <= 700) {
    isSmall = true;
    isOpened = true;
    barClicked();
    isOpened = false;
  } else {
    isSmall = false;
    isOpened = false;
  }
});

function barClicked() {
  if (isSmall) {
    if (isOpened) {
      nav.style.height = '1px';
      lineOne.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      lineOne.style.top = '25%';
      lineThree.style.transform = 'translate(-50%, -50%) rotate(-0deg)';
      lineThree.style.top = '75%';
      lineTwo.style.transform = 'translate(-50%, -50%) scale(1, 1)';
      lineTwo.style.left = '50%';
      isOpened = false;
    } else {
      nav.style.height = '100vh';
      lineOne.style.transform = 'translate(-50%, -50%) rotate(-45deg)';
      lineOne.style.top = '50%';
      lineThree.style.transform = 'translate(-50%, -50%) rotate(45deg)';
      lineThree.style.top = '50%';
      lineTwo.style.transform = 'translate(-50%, -50%) scale(0, 1)';
      lineTwo.style.left = '150%';
      isOpened = true;
    }
  }
}

barBtn.addEventListener('click', barClicked);