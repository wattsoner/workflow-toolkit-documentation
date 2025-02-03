const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const sidePanel = document.querySelector('.sidepanel');
const collapse = document.querySelector('.collapse');
const expand = document.querySelector('.expand');
const rightCol = document.querySelector('.right-col');

const section = document.getElementsByClassName('section');
const subSection = document.getElementsByClassName('sub-section');
const title = document.getElementsByClassName('title');

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

let loaderTimeout;

function loaderFunction() {
    document.body.classList.add('hide-footer');

    if (loaderTimeout) return;
    loaderTimeout = setTimeout(showPage, 1400);
}

function showPage() {
    const loader = document.getElementById("loader");
    const page = document.getElementById("page");

    if (loader) loader.style.display = "none";
    if (page) page.style.display = "block";

    console.log("Page loaded successfully.");

    if (!document.body.classList.contains('nav-open')) {
        document.body.classList.remove('hide-footer');
    }
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', closeMenuHandler);

function showMenu() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

    document.body.classList.add('nav-open', 'hide-footer');
}

function closeMenuHandler() {
    mainMenu.style.top = '-500%';
    document.body.classList.remove('nav-open');
    document.body.classList.remove('hide-footer');
}

function openSidePanel() {
    sidePanel.style.display = "block";
    collapse.style.display = 'block';
    expand.style.display = "none";
}

function closeSidePanel() {
    sidePanel.style.display = "none";
    collapse.style.display = 'none';
    expand.style.display = "block";
}

if (width < 900) {
    Array.from(title).forEach((el) => {
        el.addEventListener("click", closeSidePanel);
    });

    Array.from(section).forEach((el) => {
        el.addEventListener("click", closeSidePanel);
    });
}

if (width < 650) {
    Array.from(subSection).forEach((el) => {
        el.addEventListener("click", closeSidePanel);
    });
}

window.onload = loaderFunction;
