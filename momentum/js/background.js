const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",

];

const ImageNum = Math.floor(Math.random() * images.length);
const chosenImage = images[ImageNum];

switch (ImageNum) {
	case 0:
		document.body.style.color = "white";
		break;
	case 3:
		document.body.style.color = "#5215FC";
		break;

	default:
		document.body.style.color = "white";
}

const bgImage = document.createElement("img");
bgImage.id = "bg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);