const clock = document.querySelector("h2#clock");
const ampm = document.querySelector("h2#ampm");

function getClock() {
	const date = new Date();
	let ampm;
	let hours;
	const minutes = String(date.getMinutes()).padStart(2, 0);
	const seconds = String(date.getSeconds()).padStart(2, 0);
	if (date.getHours() < 12) {
		ampm = "AM";
		if (date.getHours() == 0) {
			hours = 12;
		} else {
			hours = String(date.getHours()).padStart(2, 0);
		}
	} else {
		ampm = "PM";
		if (date.getHours() == 12) {
			hours = 12;
		} else {
			hours = String(date.getHours() - 12).padStart(2, 0);
		}
	}
	ampm.innerHTML = `${ampm}`;
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);