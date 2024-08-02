import "./style.css";

// function dropDownDisplay(btn, lbl, option) {
//     let dropdownBtn = document.getElementById(btn);
//     let dropdownLbl = document.getElementById(lbl);
//     let optionChoices = document.getElementById(option);
//     dropdownBtn.addEventListener("click", () => {
//         if (dropdownLbl.style.display == "none") {
//             dropdownLbl.style.display = "block";
//             optionChoices.style.display = "block";
//         } else {
//             dropdownLbl.style.display = "none";
//             optionChoices.style.display = "none";
//         }
//     });
// }

// dropDownDisplay("carOptionsBtn", "carOptionsLbl", "carOptions");

// function dropDownClass(btn, lbl, option) {
//     let dropdownBtn = document.getElementById(btn);
//     let dropdownLbl = document.getElementById(lbl);
//     let optionChoices = document.getElementById(option);
//     dropdownBtn.addEventListener("click", () => {
//         if (dropdownLbl.classList.contains("visible")) {
//             dropdownLbl.classList.remove("visible");
//             optionChoices.classList.remove("visible");
//             dropdownLbl.classList.add("invisible");
//             optionChoices.classList.add("invisible");
//         } else {
//             dropdownLbl.classList.remove("invisible");
//             optionChoices.classList.remove("invisible");
//             dropdownLbl.classList.add("visible");
//             optionChoices.classList.add("visible");
//         }
//     });
// }

// dropDownClass("carOptionsBtn", "carOptionsLbl", "carOptions");

let carouselImages = [];
let images = document.querySelectorAll(".imageOptions");
let previousImageBtn = document.getElementById("previousImageBtn");
previousImageBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
let nextImageBtn = document.getElementById("nextImageBtn");
nextImageBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
let imageChosenId = 3;
let imageNav = document.getElementById("imageNav");
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    carouselImages.push(image);
}

function hideAllImages() {
    for (let i = 0; i < carouselImages.length; i++) {
        const image = carouselImages[i];
        image.style.display = "none";
    }
}
hideAllImages();

function showImage() {
    carouselImages[imageChosenId].style.display = "block";
}
showImage();
previousImageBtn.addEventListener("click", () => {
    if (imageChosenId == 0) {
        imageChosenId = carouselImages.length - 1;
        hideAllImages();
        showImage();
        changeDotColor();
    } else {
        imageChosenId -= 1;
        hideAllImages();
        showImage();
        changeDotColor();
    }
});

nextImageBtn.addEventListener("click", () => {
    if (imageChosenId == carouselImages.length - 1) {
        imageChosenId = 0;
        hideAllImages();
        showImage();
        changeDotColor();
    } else {
        imageChosenId += 1;
        hideAllImages();
        showImage();
        changeDotColor();
    }
});

function getRandomNumber(minValueIncluded, maxValueIncluded) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addDots() {
    for (let i = 0; i < carouselImages.length; i++) {
        const images = carouselImages[i];
        let a = document.createElement("a");
        a.setAttribute("href", `#img${i}`);
        a.classList.add("dotLink");
        let dot = document.createElement("div");
        dot.setAttribute("id", `dot${i}`);
        dot.classList.add("dot");
        dot.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        a.appendChild(dot);
        imageNav.appendChild(a);
    }
}

addDots();

function changeDotColor() {
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        if (i == imageChosenId) {
            dot.innerHTML = `<i class="fa-solid fa-circle"></i>`;
        } else {
            dot.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        }
    }
}
changeDotColor();

function aToImageLink() {
    let dotLinks = document.querySelectorAll(".dotLink");
    for (let i = 0; i < dotLinks.length; i++) {
        const link = dotLinks[i];
        link.addEventListener("click", () => {
            imageChosenId = i;
            hideAllImages();
            showImage();
            changeDotColor();
        });
    }
}

aToImageLink();

function moveSlide() {
    timer = setTimeout(showImage, 5000);
}

function rotateImage() {
    let imageOptions = document.querySelectorAll("imageOptions");
}
