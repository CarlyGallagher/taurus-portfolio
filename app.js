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


// ----DROPDOWN NAV FOR SOCIALS-----


function toggleSocial() {
    const subMenu = document.getElementById('SubMenu');
    subMenu.classList.toggle('open-menu');
}