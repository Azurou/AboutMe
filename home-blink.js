const homeLink = document.getElementById('homeLink');

homeLink.addEventListener('click', e => {
    e.preventDefault();
    // Add blink effect
    homeLink.classList.add('blink');
    // After animation ends, go back
    setTimeout(() => {
        history.back();
    }, 1000); // slightly longer than total animation
});
