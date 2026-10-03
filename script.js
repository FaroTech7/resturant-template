/* =========================================================
   AURELIA — MASTER JAVASCRIPT
   Global + Page-Specific Systems
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRELOADER
    ===================================================== */

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.classList.add("hide");
            }, 800);
        });
    }


    /* =====================================================
       PAGE LOADED EFFECT
    ===================================================== */

    window.addEventListener("load", () => {
        document.body.classList.add("page-loaded");
    });


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbarScroll() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbarScroll, {
        passive: true
    });

    handleNavbarScroll();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                mobileMenu.classList.remove("active");
            });
        });
    }


    /* =====================================================
       ESCAPE KEY — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }
    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    /* =====================================================
       IMAGE REVEAL
    ===================================================== */

    const imageRevealElements =
        document.querySelectorAll(".image-reveal");

    if (imageRevealElements.length) {

        const imageObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        imageRevealElements.forEach(element => {
            imageObserver.observe(element);
        });
    }


    /* =====================================================
       TEXT REVEAL
    ===================================================== */

    const revealTextElements =
        document.querySelectorAll(".reveal-text");

    if (revealTextElements.length) {

        const textObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        revealTextElements.forEach(element => {
            textObserver.observe(element);
        });
    }


    /* =====================================================
       GOLD DIVIDER ANIMATION
    ===================================================== */

    const goldDividers =
        document.querySelectorAll(".gold-divider");

    if (goldDividers.length) {

        const dividerObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.5
            }
        );

        goldDividers.forEach(divider => {
            dividerObserver.observe(divider);
        });
    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const hero = document.querySelector(".hero");

    if (hero && window.matchMedia("(pointer: fine)").matches) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center calc(50% + ${scrollPosition * 0.15}px)`;
            }

        }, {
            passive: true
        });
    }


    /* =====================================================
       MENU FILTER
    ===================================================== */

    const menuTabs = document.querySelectorAll(".menu-tab");
    const menuItems = document.querySelectorAll(".menu-item");

    if (menuTabs.length && menuItems.length) {

        menuTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                const category =
                    tab.getAttribute("data-category");

                menuTabs.forEach(item => {
                    item.classList.remove("active");
                });

                tab.classList.add("active");

                menuItems.forEach(item => {

                    const itemCategory =
                        item.getAttribute("data-category");

                    if (
                        category === "all" ||
                        itemCategory === category
                    ) {

                        item.classList.remove("hidden");

                        setTimeout(() => {
                            item.classList.add("visible");
                        }, 50);

                    } else {

                        item.classList.add("hidden");
                    }
                });
            });
        });
    }


    /* =====================================================
       GALLERY LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const lightbox =
        document.querySelector(".lightbox");

    const lightboxImage =
        document.querySelector(".lightbox-image");

    const lightboxTitle =
        document.querySelector(".lightbox-title");

    const lightboxNumber =
        document.querySelector(".lightbox-number");

    const lightboxClose =
        document.querySelector(".lightbox-close");


    if (
        galleryItems.length &&
        lightbox &&
        lightboxImage &&
        lightboxTitle &&
        lightboxNumber &&
        lightboxClose
    ) {

        galleryItems.forEach((item, index) => {

            item.addEventListener("click", () => {

                const image =
                    item.getAttribute("data-image");

                const title =
                    item.getAttribute("data-title");

                if (image) {
                    lightboxImage.style.backgroundImage =
                        `url("${image}")`;
                }

                lightboxTitle.textContent =
                    title || "";

                lightboxNumber.textContent =
                    String(index + 1).padStart(2, "0");

                lightbox.classList.add("open");

                document.body.style.overflow = "hidden";
            });
        });


        function closeLightbox() {

            lightbox.classList.remove("open");

            document.body.style.overflow = "";
        }


        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });


        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("open")
            ) {

                closeLightbox();
            }

        });
    }


    /* =====================================================
       RESERVATION — GUEST COUNTER
    ===================================================== */

    const guestMinus =
        document.querySelector(".guest-minus");

    const guestPlus =
        document.querySelector(".guest-plus");

    const guestCount =
        document.querySelector(".guest-count");

    if (guestMinus && guestPlus && guestCount) {

        let guests = parseInt(
            guestCount.textContent,
            10
        ) || 1;


        function updateGuestCount() {

            guestCount.textContent = guests;
        }


        guestMinus.addEventListener("click", () => {

            if (guests > 1) {
                guests--;
                updateGuestCount();
            }

        });


        guestPlus.addEventListener("click", () => {

            if (guests < 12) {
                guests++;
                updateGuestCount();
            }

        });
    }


    /* =====================================================
       RESERVATION — DATE MINIMUM
    ===================================================== */

    const reservationDate =
        document.querySelector("#reservation-date");

    if (reservationDate) {

        const today = new Date();

        const year =
            today.getFullYear();

        const month =
            String(today.getMonth() + 1)
                .padStart(2, "0");

        const day =
            String(today.getDate())
                .padStart(2, "0");

        reservationDate.min =
            `${year}-${month}-${day}`;
    }


    /* =====================================================
       RESERVATION — FORM
    ===================================================== */

    const reservationForm =
        document.querySelector(".reservation-form");

    const reservationModal =
        document.querySelector(".reservation-success");

    const reservationClose =
        document.querySelector(".reservation-close");

    const reservationDone =
        document.querySelector(".reservation-done");

    const reservationMessage =
        document.querySelector(".reservation-message");


    if (reservationForm && reservationModal) {

        reservationForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    document.querySelector("#name")?.value ||
                    "Guest";

                const date =
                    document.querySelector("#reservation-date")?.value ||
                    "";

                const time =
                    document.querySelector("#reservation-time")?.value ||
                    "";

                const guestNumber =
                    document.querySelector(".guest-count")?.textContent ||
                    "1";


                let formattedDate = date;

                if (date) {

                    const dateObject =
                        new Date(`${date}T00:00:00`);

                    formattedDate =
                        dateObject.toLocaleDateString(
                            "en-NG",
                            {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }
                        );
                }


                if (reservationMessage) {

                    reservationMessage.innerHTML =
                        `Thank you, ${name}. Your request for <strong>${guestNumber} guest${guestNumber !== "1" ? "s" : ""}</strong> on <strong>${formattedDate}</strong>${time ? ` at <strong>${time}</strong>` : ""} has been received.`;
                }


                reservationModal.classList.add("open");

                document.body.style.overflow = "hidden";
            }
        );
    }


    function closeReservationModal() {

        if (!reservationModal) return;

        reservationModal.classList.remove("open");

        document.body.style.overflow = "";
    }


    if (reservationClose) {

        reservationClose.addEventListener(
            "click",
            closeReservationModal
        );
    }


    if (reservationDone) {

        reservationDone.addEventListener(
            "click",
            closeReservationModal
        );
    }


    if (reservationModal) {

        reservationModal.addEventListener(
            "click",
            event => {

                if (event.target === reservationModal) {
                    closeReservationModal();
                }

            }
        );
    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(".contact-form");

    const contactModal =
        document.querySelector(".contact-success");

    const contactClose =
        document.querySelector(".contact-close");

    const contactDone =
        document.querySelector(".contact-done");


    if (contactForm && contactModal) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                contactModal.classList.add("open");

                document.body.style.overflow = "hidden";
            }
        );
    }


    function closeContactModal() {

        if (!contactModal) return;

        contactModal.classList.remove("open");

        document.body.style.overflow = "";
    }


    if (contactClose) {

        contactClose.addEventListener(
            "click",
            closeContactModal
        );
    }


    if (contactDone) {

        contactDone.addEventListener(
            "click",
            closeContactModal
        );
    }


    if (contactModal) {

        contactModal.addEventListener(
            "click",
            event => {

                if (event.target === contactModal) {
                    closeContactModal();
                }

            }
        );
    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    if (faqItems.length) {

        faqItems.forEach(item => {

            const question =
                item.querySelector(".faq-question");

            if (!question) return;

            question.addEventListener("click", () => {

                const isOpen =
                    item.classList.contains("active");


                faqItems.forEach(otherItem => {

                    otherItem.classList.remove("active");
                });


                if (!isOpen) {

                    item.classList.add("active");
                }
            });
        });
    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.querySelector(".scroll-progress");


    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${percentage}%`;
    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );

    updateScrollProgress();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 700) {

                    backToTop.classList.add("visible");

                } else {

                    backToTop.classList.remove("visible");
                }

            },
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");


    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;
            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) * 0.12;

            ringY +=
                (mouseY - ringY) * 0.12;


            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );
        }


        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, input, select, textarea, .gallery-item, .menu-tab"
            );


        interactiveElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {
                    cursorRing.classList.add(
                        "cursor-hover"
                    );
                }
            );


            element.addEventListener(
                "mouseleave",
                () => {
                    cursorRing.classList.remove(
                        "cursor-hover"
                    );
                }
            );

        });
    }


    /* =====================================================
       PAGE TRANSITIONS
    ===================================================== */

    


    const internalLinks =
        document.querySelectorAll(
            'a[href$=".html"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    link.getAttribute("href");


                /* Don't interfere with modified clicks */
                if (
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey ||
                    event.altKey
                ) {
                    return;
                }


                /* Ignore invalid links */
                if (
                    !target ||
                    target.startsWith("#") ||
                    target.startsWith("http") ||
                    target.startsWith("mailto:") ||
                    target.startsWith("tel:") ||
                    link.target === "_blank" ||
                    link.hasAttribute("download")
                ) {
                    return;
                }


                /* Don't animate if already on the same page */
                const currentPage =
                    window.location.pathname
                        .split("/")
                        .pop() || "index.html";

                const targetPage =
                    target.split("/")
                        .pop();


                if (currentPage === targetPage) {
                    return;
                }


                event.preventDefault();


                window.location.href = target;
            }
        );
    });


    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    const magneticButtons =
        document.querySelectorAll(".btn");


    if (
        magneticButtons.length &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        magneticButtons.forEach(button => {

            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(${x * 0.08}px, ${y * 0.08}px)`;
                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translate(0, 0)";
                }
            );
        });
    }


    /* =====================================================
       ESCAPE KEY — MODALS
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;


            if (
                reservationModal &&
                reservationModal.classList.contains("open")
            ) {
                closeReservationModal();
            }


            if (
                contactModal &&
                contactModal.classList.contains("open")
            ) {
                closeContactModal();
            }
        }
    );

});