var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// Attach event listeners after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const copyLinks = document.querySelectorAll('.sub-menu-link.copy');

    copyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // prevent any default navigation

            const textToCopy = link.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Change the text to "Copied!"
                link.querySelector('p').textContent = "Copied!";
                setTimeout(() => {
                    link.querySelector('p').textContent = textToCopy;
                }, 900);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
});

// ---DARK MODE____
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});



// Handle hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle contact/socials toggle
// Get elements
const contactToggle = document.getElementById('contact-toggle');
const socialsToggle = document.getElementById('socials-toggle');
const contactSubMenu = document.querySelector('.contact .sub-menu-wrap');
const socialsSubMenu = document.querySelector('.socials .sub-menu-wrap');

// Add click event for Contact
contactToggle.addEventListener('click', function (e) {
    e.preventDefault(); // prevent jumping
    // Close socials if open
    socialsSubMenu.classList.remove('active');
    // Toggle contact
    contactSubMenu.classList.toggle('active');
});

// Add click event for Socials
socialsToggle.addEventListener('click', function (e) {
    e.preventDefault(); // prevent jumping
    // Close contact if open
    contactSubMenu.classList.remove('active');
    // Toggle socials
    socialsSubMenu.classList.toggle('active');
});


function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
  }
  
  setVH();
  window.addEventListener('resize', setVH);