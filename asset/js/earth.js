
const earthWrapper = document.getElementById('earthWrapper');
let currentIndex = 0;

function nextearthSlide() {
    currentIndex = Math.min(currentIndex + 3, earthWrapper.children.length - 3);
    updateSlide();
}

function prevearthSlide() {
    currentIndex = Math.max(currentIndex - 3, 0);
    updateSlide();
}

function updateSlide() {
    const earths = earthWrapper.children;

    for (let i = 0; i < earths.length; i++) {
        if (i >= currentIndex && i < currentIndex + 3) {
            earths[i].classList.add('show');
        } else {
            earths[i].classList.remove('show');
        }
    }

    const translateX = -currentIndex * (300 + 20); // 300 is the earth width, 20 is the margin
    earthWrapper.style.transform = `translateX(${translateX}px)`;
}

// Initial slide update
updateSlide();
