document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        // Hide the current active image
        images[currentIndex].classList.remove('active');
        // Calculate the index of the next image
        currentIndex = (currentIndex + 1) % images.length;
        // Show the next image
        images[currentIndex].classList.add('active');
    }

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', showNextImage);

    // Show the first image initially
    images[currentIndex].classList.add('active');
});