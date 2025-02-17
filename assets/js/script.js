document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

// Menu toggle for mobile screens
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".navbar ul");

if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuIcon.classList.toggle("active");
    });
} else {
    console.error("Menu icon or navbar ul is missing!");
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Ensure menu is visible in desktop view
      navMenu.classList.remove("show");
      menuIcon.classList.remove("active");
    }
  });
    // Pricing toggle logic
    const pricingToggle = document.getElementById("pricingToggle");
    const studentCards = document.querySelectorAll(".student-card");
    const professionalCards = document.querySelectorAll(".professional-card");

    if (pricingToggle) {
        // Set default visibility based on toggle's initial state
        if (pricingToggle.checked) {
            professionalCards.forEach((card) => (card.style.display = "block"));
            studentCards.forEach((card) => (card.style.display = "none"));
        } else {
            studentCards.forEach((card) => (card.style.display = "block"));
            professionalCards.forEach((card) => (card.style.display = "none"));
        }

        pricingToggle.addEventListener("change", () => {
            if (pricingToggle.checked) {
                studentCards.forEach((card) => (card.style.display = "none"));
                professionalCards.forEach((card) => (card.style.display = "block"));
            } else {
                studentCards.forEach((card) => (card.style.display = "block"));
                professionalCards.forEach((card) => (card.style.display = "none"));
            }
        });
    }

// Toggle day schedule logic
const dayToggle = document.getElementById("dayToggle");
const dayone = document.querySelectorAll(".day-one");
const daytwo = document.querySelectorAll(".day-two");

if (dayToggle) {
    // Function to handle the visibility of schedules
    const toggleSchedule = () => {
        if (dayToggle.checked) {
            // Show Day 2, hide Day 1
            dayone.forEach((card) => (card.style.display = "none"));
            daytwo.forEach((card) => (card.style.display = "table"));
        } else {
            // Show Day 1, hide Day 2
            dayone.forEach((card) => (card.style.display = "table"));
            daytwo.forEach((card) => (card.style.display = "none"));
        }
    };

    // Set initial visibility on page load
    toggleSchedule();

    // Add event listener to toggle switch
    dayToggle.addEventListener("change", toggleSchedule);
}
    

    // FAQ toggle logic
    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;

            // Toggle active class for the button
            button.classList.toggle("active");

            // Toggle open class for the answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
