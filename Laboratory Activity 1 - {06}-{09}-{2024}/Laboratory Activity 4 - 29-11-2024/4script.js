document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        document.body.style.backgroundImage = `url('background${index + 1}.jpg')`;
    });

    card.addEventListener('mouseleave', () => {
        document.body.style.backgroundImage = `url('ex2background.jpg')`;
    });
});

document.querySelector('.image-container').addEventListener('mouseenter', function() {
    document.body.style.backgroundImage = 'url("background4.jpg")';
});

document.querySelector('.image-container').addEventListener('mouseleave', function() {
    document.body.style.backgroundImage = 'url("ex2background.jpg")';
});