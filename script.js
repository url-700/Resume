// LITHEESH RESUME — navigation behavior

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    // Smooth navigation when clicking section names
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Highlight the active navigation section
    const sections = document.querySelectorAll(
        "#summary, #education, #skills, #projects, #events, #certifications, #contact"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach((link) => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                    "#" + entry.target.id
                            );
                        });
                    }
                });
            },
            {
                rootMargin: "-20% 0px -65% 0px"
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
});