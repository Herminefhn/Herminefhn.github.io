document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', showNextImage);

    images[currentIndex].classList.add('active');
});