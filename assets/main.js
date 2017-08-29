const secondHand = document.querySelector('.hand-second');
const minHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsToDegrees = ((seconds/60)*360)-90;
	console.log(seconds);
	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

	const mins = now.getMinutes();
	const minsToDegrees = ((mins/60)*360)-90;
	console.log(mins);
	minHand.style.transform = `rotate(${minsToDegrees}deg)`;

	const hour = now.getHours();
	const hoursToDegrees = ((hour/12)*360)-90;
	console.log(hoursToDegrees);
	hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

	}

setInterval(setDate,1000);