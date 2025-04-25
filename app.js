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
// Function to copy text to clipboard

document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', (event) => {
        // Prevents any default behavior 
        event.preventDefault();

        const textToCopy = item.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // visual feedback — text changes to "Copied!" and color change
                const h2 = item.querySelector('h2');
                const originalText = h2.textContent;
                h2.textContent = 'Copied!';
                h2.style.color = '#ffcc80';

                // Reset after .05 seconds
                setTimeout(() => {
                    h2.textContent = originalText;
                    h2.style.color = '';
                }, 500);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    });
});

// ----DROPDOWN NAV FOR SOCIALS-----


function toggleSocial() {
    const subMenu = document.getElementById('SubMenu');
    subMenu.classList.toggle('open-menu');
}