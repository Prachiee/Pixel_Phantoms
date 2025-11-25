// js/help.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal Scroll Logic
    const container = document.querySelector(".horizontal-container");
    const sections = gsap.utils.toArray(".team-panel");

    // Calculate width to scroll (total width - one viewport width)
    // We are moving the container to the left
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".team-scroll-wrapper",
            pin: true,
            scrub: 1,
            // Adjust 'end' to control scroll speed/distance
            // +=3000 means it takes 3000px of vertical scroll to finish the horizontal section
            end: "+=3000", 
            snap: 1 / (sections.length - 1), // Optional: Snaps to each panel
        }
    });

    // Simple Search Interaction (Visual Feedback)
    const searchInput = document.querySelector('.help-search');
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = "scale(1.02)";
    });
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = "scale(1)";
    });
});