document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const typedText = document.querySelector(".typed-text");
    const phrases = ["Software Developer", "Machine Learning Enthusiast", "Data Analyst"];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        let displayedText = currentPhrase.substring(0, currentLetterIndex);

        typedText.textContent = displayedText;

        if (!isDeleting && currentLetterIndex < currentPhrase.length) {
            currentLetterIndex++;
        } else if (isDeleting && currentLetterIndex > 0) {
            currentLetterIndex--;
        } else if (currentLetterIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 1000); // Pause before deleting
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        }

        setTimeout(type, isDeleting ? 50 : 150); // Adjust typing speed
    }

    type();

    // Show the sliding white page and hide the name and picture
    const whitePage = document.getElementById("white-page");
    const content = document.querySelector(".content");

    function showDetails() {
        whitePage.style.bottom = "0";
        whitePage.classList.remove("hidden");
        content.classList.add("hidden-content"); // Hide name and picture
    }

    function hideDetails() {
        whitePage.style.bottom = "-100%";
        content.classList.remove("hidden-content"); // Show name and picture again
    }

    window.showDetails = showDetails;
    window.hideDetails = hideDetails;

    // Show Projects and Achievements sections
    const projectsSection = document.getElementById("projects");
    const achievementsSection = document.getElementById("achievements");

    function showProjects() {
        achievementsSection.classList.remove("show");
        projectsSection.classList.add("show"); // Fade in and scale up projects section
    }

    function showAchievements() {
        projectsSection.classList.remove("show");
        achievementsSection.classList.add("show"); // Fade in and scale up achievements section
    }

    window.showProjects = showProjects;
    window.showAchievements = showAchievements;
});
