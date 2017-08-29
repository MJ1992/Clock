const secondHand = document.querySelector('.hand-second');
const minHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setDate(){
	var now = new Date();
	var seconds = now.getSeconds();
	const secondsToDegrees = ((seconds/60)*360)-90;
	console.log(seconds);
	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

	var mins = now.getMinutes();
	const minsToDegrees = ((mins/60)*360)-90;
	console.log(mins);
	minHand.style.transform = `rotate(${minsToDegrees}deg)`;

	var hour = now.getMinutes();
	const hoursToDegrees = ((hour/12)*360)-90;
	console.log(hour);
	hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

	}

setInterval(setDate,1000);