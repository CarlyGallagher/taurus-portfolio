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
