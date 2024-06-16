document.addEventListener('DOMContentLoaded', () => {
    const flowerRainContainer = document.querySelector('.flower-rain');
    const flowerCount = 30;

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
        flowerRainContainer.appendChild(flower);
    }
});
