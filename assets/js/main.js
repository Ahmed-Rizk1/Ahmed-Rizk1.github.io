// Typewriter Effect for Hero Section
const phrases = ["Data Scientist", "Machine Learning Engineer", "GenAI Enthusiast"];
let currentPhraseIndex = 0;
let isDeleting = false;
let txt = '';
const typeSpeed = 100;
const deleteSpeed = 50;
const waitTime = 2000;

function typeWriter() {
    const currentPhrase = phrases[currentPhraseIndex];
    const element = document.getElementById('typewriter-text');
    
    if (!element) return;

    if (isDeleting) {
        txt = currentPhrase.substring(0, txt.length - 1);
    } else {
        txt = currentPhrase.substring(0, txt.length + 1);
    }

    element.innerHTML = `<span class="wrap">${txt}</span>`;

    let typeSpeedCurrent = typeSpeed;

    if (isDeleting) {
        typeSpeedCurrent = deleteSpeed;
    }

    if (!isDeleting && txt === currentPhrase) {
        typeSpeedCurrent = waitTime;
        isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false;
        currentPhraseIndex++;
        if (currentPhraseIndex === phrases.length) {
            currentPhraseIndex = 0;
        }
        typeSpeedCurrent = 500;
    }

    setTimeout(typeWriter, typeSpeedCurrent);
}

// Mobile Menu Toggle (Simple implementation)
// Note: We need to add the hamburger button in HTML for this to work
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();

    // Scroll Reveal Animation (General sections)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.section').forEach((section) => {
        section.classList.add('fade-in'); 
        observer.observe(section);
    });

    // Timeline Items Scroll Reveal
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index relative to current view could be complex, 
                // but just adding the class works with CSS opacity transition.
                // To get the "one by one" effect, we can rely on standard CSS transition or add a delay.
                // Since they are stacked vertically, natural scroll does one by one. 
                // But if multiple are in view, we might want to stagger them.
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
                timelineObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of item is visible
        rootMargin: "0px" 
    });

    document.querySelectorAll('.timeline-item').forEach((item) => {
        timelineObserver.observe(item);
    });
});
