const m = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const wd = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Firday",
	"Saturday",
];

let day = new Date().getUTCDate();
let month = m[new Date().getUTCMonth()];
let year = new Date().getUTCFullYear();
let weekDay = wd[new Date().getUTCDay()];

let dateDisplay = document.querySelector(".date");
dateDisplay.innerHTML = `${weekDay}, ${month} ${day}, ${year} `;

const hours = document.getElementById("hours");
const min = document.getElementById("minute");
const second = document.getElementById("second");

// let updateClock = setInterval(clock, 1000);
function clock() {
	let s = new Date().getSeconds();
	let h = new Date().getHours();
	let mi = new Date().getMinutes();

	if (second < 10) {
		s = "0" + second;
	}
	hours.innerHTML = h;
	min.innerHTML = mi;
	second.innerHTML = s;
}

setInterval(clock, 1000);
