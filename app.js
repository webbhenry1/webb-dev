document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fullscreen-section");
    const controls = document.querySelectorAll(".control");
    
    // Function to determine which section is in view
    function getActiveSection() {
        let minVal = Infinity;
        let activeSection = null;

        sections.forEach(section => {
            const distance = Math.abs(section.getBoundingClientRect().top);
            if (distance < minVal) {
                minVal = distance;
                activeSection = section;
            }
        });

        // Special threshold for "home" section
        const homeSection = document.querySelector("#home");
        if (homeSection && (homeSection.getBoundingClientRect().top + homeSection.getBoundingClientRect().height * 0.8) > 0) {
            return homeSection;
        }

        // Check thresholds for other sections
        // When scrolling down, the active section changes when the current section is more than 85% out of view
        if (activeSection.getBoundingClientRect().top < -activeSection.getBoundingClientRect().height * 0.90) {
            return activeSection.nextElementSibling || activeSection;
        }
        // When scrolling up, the active section changes when the next section is less than 15% into view
        if (activeSection.previousElementSibling && activeSection.getBoundingClientRect().top > activeSection.previousElementSibling.getBoundingClientRect().height * 0.10) {
            return activeSection.previousElementSibling;
        }

        return activeSection;
    }

    // Update the active button based on the section in view
    function updateActiveButton() {
        const activeSection = getActiveSection();
        const activeId = activeSection ? activeSection.id : null;

        controls.forEach(control => {
            control.classList.remove("active-btn");
            if (activeId && control.href.endsWith(activeId)) {
                control.classList.add("active-btn");
            }
        });
    }

    // Listen for scroll events to update the active button
    document.addEventListener("scroll", updateActiveButton);

    // Initial call to set the active button
    updateActiveButton();
});



    

// Toggle light-mode class
document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateImageForMode();
});



function updateImageForMode() {
    // Select all images with the data-theme-src attribute
    const themedImages = document.querySelectorAll('[data-theme-src]');

    themedImages.forEach(image => {
        const lightSrc = image.getAttribute('data-theme-src');
        const originalSrc = image.getAttribute('data-original-src');

        if (document.body.classList.contains('light-mode')) {
            image.src = lightSrc;
        } else {
            image.src = originalSrc;
        }
    });
}
    
