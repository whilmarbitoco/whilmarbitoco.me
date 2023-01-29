const navbar = document.querySelector(".navbar");
if (navbar) {
    const navLinks = navbar.querySelectorAll("a");
    if (navLinks.length > 0) {
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                navLinks.forEach((link) => link.classList.remove("active"));
                link.classList.add("active");
                const targetId = link.getAttribute("href");
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    }
}
