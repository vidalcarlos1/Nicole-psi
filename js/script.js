/* =====================================================
   CONFIGURAÇÕES
===================================================== */

// COLOQUE AQUI O NÚMERO DA NICOLE
// Formato: código do país + DDD + número
// Exemplo: 5519999999999

const whatsappNumber = "5519993800424";


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappMessage =
    "Olá, Nicole! Vim pelo seu site e gostaria de saber mais sobre os atendimentos psicológicos.";


const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


document
    .getElementById("whatsappButton")
    .href = whatsappURL;


document
    .getElementById("floatingWhatsapp")
    .href = whatsappURL;


document
    .getElementById("footerWhatsapp")
    .href = whatsappURL;


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


/* =====================================================
   HERO SLIDER
===================================================== */

const slides =
    document.querySelectorAll(".hero-slide");

const dots =
    document.querySelectorAll(".dot");


let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

}


function nextSlide() {

    let next =
        currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);

}


let sliderInterval =
    setInterval(nextSlide, 6000);


/* =====================================================
   DOTS DO SLIDER
===================================================== */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        clearInterval(sliderInterval);

        sliderInterval =
            setInterval(nextSlide, 6000);

    });

});


/* =====================================================
   ANIMAÇÃO SUAVE DOS LINKS
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });