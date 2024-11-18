// Get the contrast toggle button
const contrastToggleBtn = document.getElementById('contrast-toggle');

// Add event listener to the button
contrastToggleBtn.addEventListener('click', function () {
    // Toggle the 'high-contrast' class on the body element
    document.body.classList.toggle('high-contrast');
    
    // Update the button text based on the current mode
    if (document.body.classList.contains('high-contrast')) {
        contrastToggleBtn.textContent = '⭐ Click for Normal Contrast';
    } else {
        contrastToggleBtn.textContent = '⭐Click for High Contrast';
    }
});
