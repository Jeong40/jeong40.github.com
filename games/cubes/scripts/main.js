//game window size auto adjustment
function sizeAdjustment() {
	if (window.innerWidth / window.innerHeight <= 3 / 4) {
		gameContainer.style.width = '99vw';
		gameContainer.style.height = '132vw';
		btnContent.style.fontSize = '10vw';
		display.style.fontSize = '5vw';
	} else {
		gameContainer.style.width = '75vh';
		gameContainer.style.height = '100vh';
		btnContent.style.fontSize = '7.5vh';
    display.style.fontSize = '3.75vh';
	}
}

sizeAdjustment();
window.addEventListener('resize', sizeAdjustment);

function axisCalculation(e) {
	const touch = e.touches[e.touches.length - 1];
	const clickedElement = touch.target;
	const rect = clickedElement.getBoundingClientRect();
	
	const x = Math.ceil((touch.clientX - rect.left) / rect.width * 4);
	return(x);
}

class Keys {
	constructor(num) {
		this.x = Math.ceil(4 * Math.random());
		this.y = 300 - 100 * num;
	}
	move() {
		
		this.y += 100;
		if (this.y == 400) {
			this.y -= 400;
			this.x = Math.ceil(4 * Math.random());
		}
		if (this.y + 100 == 400) {
			keyPosition = this.x;
		}
		this.draw();
	}
	draw() {
		c.fillRect((this.x - 1) * 75, this.y, 75, 100);
	}
}

let key1 = new Keys(1);
let key2 = new Keys(2);
let key3 = new Keys(3);
let key4 = new Keys(4);

function timesup() {
	alertWindow.style.top = '50%';
	untouchableWindow.style.top = '50%';
	display.innerHTML = `时间到!</br>你的分数是......${score}!`;
	score = 0;
	initialize();
	isRunning = false;
}

function touchReact(e) {
	if (!isRunning) {
		isRunning = true;
		timeout = setTimeout(timesup, 10000);
	}
	e.preventDefault();
	const clickedX = axisCalculation(e);
	c.fillStyle = '#eee';
	c.fillRect(0, 0, 300, 400);
	c.fillStyle = 'black';
	if (clickedX == keyPosition) {
		key1.move();
		key2.move();
		key3.move();
		key4.move();
		score += 1;
		c.fillRect(74, 0, 3, 400);
    c.fillRect(149, 0, 3, 400);
    c.fillRect(224, 0, 3, 400);
		c.fillStyle = 'red';
		c.fillText(`${score}`, 140, 50);
	} else {
		display.innerHTML = `游戏结束!</br>你的分数是......${score}!`;
		alertWindow.style.top = '50%';
		untouchableWindow.style.top = '50%';
		score = 0;
		isRunning = false;
		initialize();
		clearTimeout(timeout);
	}
}

function initialize() {
	c.fillStyle = '#eee';
	c.fillRect(0, 0, 300, 400);
	c.fillStyle = 'black';
	key1.x = Math.ceil(4 * Math.random());
	key2.x = Math.ceil(4 * Math.random());
	key3.x = Math.ceil(4 * Math.random());
	key4.x = Math.ceil(4 * Math.random());
	key1.move();
	key2.move();
	key3.move();
	key4.move();
	c.fillRect(74, 0, 3, 400);
	c.fillRect(149, 0, 3, 400);
	c.fillRect(224, 0, 3, 400);
	c.font = '30px Arial';
	c.fillStyle = 'Red';
	c.fillText('按下第一个键以开始', 10, 100);
	c.fillText('十秒内你能打到几分？', 2, 130);
	c.fillText('PS：有垂直判定！', 15, 160);
}
initialize();

confirmBtn.onclick = () => {
	alertWindow.style.top = '-50%';
	untouchableWindow.style.top = '-50%';
}

gameWindow.addEventListener('touchstart',touchReact);