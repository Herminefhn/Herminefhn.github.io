document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        // Gjømme bilde som e der
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        // Vise neste bilde
        images[currentIndex].classList.add('active');
    }

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', showNextImage);

    // Vise da førsta bilde
    images[currentIndex].classList.add('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery2 img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    const nextButton = document.querySelector('.next-button2');
    nextButton.addEventListener('click', showNextImage);

    images[currentIndex].classList.add('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery3 img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    const nextButton = document.querySelector('.next-button3');
    nextButton.addEventListener('click', showNextImage);

    images[currentIndex].classList.add('active');
});
