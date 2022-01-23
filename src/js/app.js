document.addEventListener('DOMContentLoaded', function () {
    tabs();
    accordion();
    navegacionResponsive();
    disableScroll();
    animation();
});

function tabs() {
    const btns = document.querySelectorAll('.btn');
    const tabs = document.querySelectorAll('.contenido');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach((btn) => btn.classList.remove('active'));
            tabs.forEach((tab) => tab.classList.remove('active'));
            btn.classList.add('active');

            document.querySelector(btn.dataset.target).classList.add('active');
        });
    })
}

function accordion() {
    const accordion = document.getElementsByClassName('contenidoAccordion');
    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    navegacion.classList.toggle('mostrar');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function disableScroll() {
    const navegacionScroll = document.querySelector('.menu');
    const sup = document.querySelector('.sup')
    navegacionScroll.classList.remove('mostrar');

    window.onscroll = function () {
        if (window.scrollY >= 200) {
            navegacionScroll.classList.remove('mostrar');
        }

        if (window.scrollY >= 300) {
            sup.classList.add('headerAnimate');
        } else if (window.scrollY < 300) {
            sup.classList.remove('headerAnimate');
        }
    };
}

function comprobarEmail(email) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var success = expReg.test(email);
    const inputEmail = document.querySelector('.inputEmail');
    const spanError = document.querySelector('.error');
    const spanPerfecto = document.querySelector('.success');

    if (success) {
        inputEmail.classList.add('great');
        spanPerfecto.classList.add('great');
        setTimeout(function () {
            inputEmail.classList.remove('great');
            spanPerfecto.classList.remove('great');
        }, 3000);
    } else if (success == false) {
        inputEmail.classList.add('wrong');
        spanError.classList.add('wrong');
        setTimeout(function () {
            inputEmail.classList.remove('wrong');
            spanError.classList.remove('wrong');
        }, 3000);
    }
}


// ANIMATIONS 
function animation() {
    gsap.registerPlugin(EaselPlugin);

    // Header
    gsap.set(".sup", { scale: 1 });
    gsap.timeline()
        .from(".img", { duration: 1, opacity: 0 })
        .from("#imagen", { opacity: 0, scale: 0, ease: "back" })
        .from(".menu li", { y: -200, stagger: 0.1, delay: 1, opacity: 0, duration: 0.8, ease: "elastic" })

    gsap.set("#hero", { scale: 1 });
    gsap.timeline()
        .from(".infoHero", { x: -200, opacity: 0, delay: 2, duration: 1, ease: "elastic" })
        .from(".imgHero", { x: -200, opacity: 0, duration: 2, ease: "slow" });

    var features = gsap.timeline({
        scrollTrigger: {
            trigger: '.features',
            start: '0% 65%',
            end: '40% 65%',
            scrub: 1
        }, duration: 7
    });
    features.from(".infoFeatures .titulo ", { opacity: 0, y: -160, duration: 4, ease: 'back' })
    features.from(".infoFeatures .descripcion", { opacity: 0, duration: 1, x: -250, ease: "bounce" })
    features.from(".centro .lista .btn", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"})
    features.from(".contenidoLista .contenido .image img", {duration: 1, x: -100, duration: 1, opacity: 0, ease: "back"})
    features.from(".contenidoLista .contenido .info", {duration: 1, x: -100, duration: 1, opacity: 0,  ease: "back"})
    features.from(".contenidoLista .contenido .info .button", {delay:1, scale: 0, duration: 1, opacity: 0,  ease: "back"})

    var downloads = gsap.timeline({
        scrollTrigger: {
            trigger: '.download',
            start: '-20% 45%',
            end: '40% 45%',
            scrub: 1
        }, duration: 1
    });
    downloads.from(".download .titulo ", { opacity: 0, y: -160, duration: 1, ease: 'back' })
    downloads.from(".download .descripcion", { opacity: 0, duration: 1, x: -250, ease: "bounce" })
    downloads.from(".cards .card", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});

    var fyq = gsap.timeline({
        scrollTrigger: {
            trigger: '.preguntas',
            start: '-20% 45%',
            end: '40% 45%',
            scrub: 1
        }, duration: 1
    });
    fyq.from(".preguntas .titulo ", { opacity: 0, y: -160, duration: 1, ease: 'back' })
    fyq.from(".preguntas .descripcion", { opacity: 0, duration: 1, x: -250, ease: "bounce"})
    fyq.from(".accordion", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});
    fyq.from(".preguntas .button", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});

    var contact = gsap.timeline({
        scrollTrigger: {
            trigger: '.contactUs',
            start: '-20% 70%',
            end: '40% 70%',
            scrub: 1
        }, duration: 1
    });
    contact.from(".contenidoContact span", { opacity: 0, y: -160, duration: 1, ease: 'back' })
    contact.from(".contenidoContact p", { opacity: 0, duration: 1, x: -250, ease: "bounce"})
    contact.from(".contenidoContact form", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});

    var footer = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: '-20% 100%',
            end: '40% 100%',
            scrub: 1
        }, duration: 1
    });
    footer.from(".footer logo", { opacity: 0, x: -160, duration: 1, ease: 'back' })
    footer.from(".footer .menu", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});
    footer.from(".footer .social", {duration: 1, y: -100, duration: 1, opacity: 0, stagger: 0.3, ease: "bounce"});
}
