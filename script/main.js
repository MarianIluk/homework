const body = document.body;
const mainContainer = document.createElement("div");
const container1 = document.createElement("div");
const img1 = document.createElement("img");
const header1 = document.createElement("h1");
const text1 = document.createElement("p");
const button1 = document.createElement("button");

mainContainer.classList.add("main-container");
container1.classList.add("container");
header1.classList.add("text-color");
text1.classList.add("text-color");
button1.classList.add("color-btn");

body.appendChild(mainContainer);
mainContainer.appendChild(container1);
container1.appendChild(img1);
img1.src = "../img/twiter.png";
container1.appendChild(header1);
container1.appendChild(text1);
container1.appendChild(button1);

header1.textContent = "TWITTER";
text1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed mi arcu. Sed quis tempor ante. Integer vehicula imperdiet elit, vitae pellentesque odio maximus vitae.";
button1.textContent = "READ MORE";


const container = document.createElement("div");
const img = document.createElement("img");
const header = document.createElement("h1");
const text = document.createElement("p");
const button = document.createElement("button");

container.classList.add("inst-container");
header.classList.add("inst-text-color");
text.classList.add("inst-text-color");
button.classList.add("inst-color-btn");

mainContainer.appendChild(container);
container.appendChild(img);
img.src = "../img/insta.png";
container.appendChild(header);
container.appendChild(text);
container.appendChild(button);

header.textContent = "INSTAGRAM";
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed mi arcu. Sed quis tempor ante. Integer vehicula imperdiet elit, vitae pellentesque odio maximus vitae.";
button.textContent = "READ MORE";


const container2 = document.createElement("div");
const img2 = document.createElement("img");
const header2 = document.createElement("h1");
const text2 = document.createElement("p");
const button2 = document.createElement("button");

container2.classList.add("container");
header2.classList.add("text-color");
text2.classList.add("text-color");
button2.classList.add("color-btn");

mainContainer.appendChild(container2);
container2.appendChild(img2);
img2.src = "../img/youtub.png";
container2.appendChild(header2);
container2.appendChild(text2);
container2.appendChild(button2);

header2.textContent = "YOUTUBE";
text2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed mi arcu. Sed quis tempor ante. Integer vehicula imperdiet elit, vitae pellentesque odio maximus vitae.";
button2.textContent = "READ MORE";