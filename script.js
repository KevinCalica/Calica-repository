const musicPlayer = document.getElementById('musicPlayer');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    // Toggle the 'minimized' class
    musicPlayer.classList.toggle('minimized');
    
    // Change button text based on whether the player is minimized or not
    if (musicPlayer.classList.contains('minimized')) {
        toggleButton.textContent = '+';  // Show plus when the player is minimized
    } else {
        toggleButton.textContent = '_';  // Show underscore when the player is expanded
    }
});
