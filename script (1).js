/* =====================================================
   GROWTH CAPITAL ACADEMY
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= FAQ ================= */

const faqButtons =
    document.querySelectorAll(".faq-item button");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item =
            button.parentElement;

        const answer =
            item.querySelector(":scope > div");


        /* Close other FAQ */

        document.querySelectorAll(".faq-item")
            .forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove(
                        "active"
                    );

                    const otherAnswer =
                        otherItem.querySelector(
                            ":scope > div"
                        );

                    otherAnswer.style.maxHeight =
                        null;

                }

            });


        /* Open / close selected */

        item.classList.toggle("active");


        if (item.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* ================= NAVBAR ================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3,5,9,.97)";

    } else {

        navbar.style.background =
            "rgba(3,5,9,.85)";

    }

});


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function(e) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });
