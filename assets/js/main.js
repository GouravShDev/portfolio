/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}

navlink.forEach(link => link.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills-content');

skillsContent.forEach(content => {
    const toggleButton = content.querySelector('.skills-header');
    toggleButton.addEventListener('click', () => {

        content.classList.toggle('skills-close');
        content.classList.toggle('skills-open');
    });
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.toggle('qualification-active');
        });
        // target.classList.add('qualification-active');
        tabs.forEach(tab => {
            console.log(tab)
            tab.classList.toggle('qualification-active')
        });
        // tab.classList.add('qualification-active');
    });

});
/*==================== SERVICES MODAL ====================*/
const servicesContent = document.querySelectorAll('.services-content');
servicesContent.forEach(content => {
    const modalButton = content.querySelector('.services-button');
    modalButton.addEventListener('click', () => {
        const modal = content.querySelector('.services-modal');
        modal.classList.add('services-modal-open');
        const modalClose = content.querySelector('.services-modal-close');
        modalClose.addEventListener('click', () => {
            modal.classList.remove('services-modal-open');
        });
    }
    );
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // mouseWheel: true,
    // keyboard: true,
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')
// console.log(sections)
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset
    const scrollUp = document.getElementById('scroll-up')
    if (scrollY > 0) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
});


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Send mail from Contact Form

function sendMail() {
    const name = document.getElementById('contact-name').value
    const email = document.getElementById('contact-email').value
    const message = document.getElementById('contact-message').value
    window.location.href = 'mailto:gourav0sharma1@gmail.com?subject=Subject - ' + name + ' (' + email + ')' + '&body=' + message;

}