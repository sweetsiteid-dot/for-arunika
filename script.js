/*==============================
        LOADER
===============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = ".6s";

    }, 1500);

});

/*==============================
        ELEMENT
===============================*/

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

const pinInput = document.getElementById("pinInput");
const checkPin = document.getElementById("checkPin");
const pinError = document.getElementById("pinError");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

/*==============================
        PIN
===============================*/

const correctPin = "2626";

checkPin.addEventListener("click", openWebsite);

pinInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        openWebsite();

    }

});

function openWebsite(){

    if(pinInput.value === correctPin){

        pinScreen.style.opacity = "0";
        pinScreen.style.pointerEvents = "none";

        setTimeout(()=>{

            pinScreen.style.display = "none";
            website.style.display = "block";

            music.play().catch(()=>{});

        },500);

    }else{

        pinError.innerHTML =
        "PIN salah 🤍";

        pinInput.value = "";

    }

}

/*==============================
        MUSIC
===============================*/

let playing = true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

    }else{

        music.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }

    playing = !playing;

});

/*==============================
        LOVE COUNTER
===============================*/

const loveDays =
document.getElementById("loveDays");

const firstDate =
new Date("2026-05-23");

function updateLoveDays(){

    const today = new Date();

    const diff =
    today - firstDate;

    const days =
    Math.floor(

        diff /
        (1000*60*60*24)

    );

    loveDays.innerHTML = days;

}

updateLoveDays();

/*==============================
        OPEN BOOK
===============================*/

const openBook =
document.getElementById("openBook");

if(openBook){

    openBook.addEventListener("click",()=>{

        document.querySelector(".letter")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}

/*==============================
        BACK TO TOP
===============================*/

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
        SCROLL REVEAL
===============================*/

const reveals =
document.querySelectorAll(

".paper,.timeline-item,.photo,.note,.quiz-box,.counter-card"

);

function revealScroll(){

    const trigger =
    window.innerHeight * .85;

    reveals.forEach((item)=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener(

"scroll",

revealScroll

);

revealScroll();

/*==============================
        PHOTO EFFECT
===============================*/

const photos =
document.querySelectorAll(".photo");

photos.forEach((photo)=>{

    photo.addEventListener(

        "mouseenter",

        ()=>{

            photo.style.zIndex="5";

        }

    );

    photo.addEventListener(

        "mouseleave",

        ()=>{

            photo.style.zIndex="1";

        }

    );

});

/*==============================
        PAPER EFFECT
===============================*/

const papers =
document.querySelectorAll(".paper");

papers.forEach((paper,index)=>{

    paper.style.transitionDelay =
    `${index * .2}s`;

});

/*==============================
        SMOOTH LINKS
===============================*/

document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target =
            document.querySelector(

            this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});

/*==============================
        QUIZ
===============================*/

const quizButtons =
document.querySelectorAll(".quiz-btn");

quizButtons.forEach((button)=>{

    button.addEventListener("click",function(){

        const parent =
        this.parentElement;

        if(parent.classList.contains("answered")) return;

        parent.classList.add("answered");

        if(this.classList.contains("correct")){

            this.style.background="#79B8FF";
            this.style.color="#fff";

            createHeart();

        }else{

            this.style.background="#ffb6b6";
            this.style.color="#fff";

            const correct =
            parent.querySelector(".correct");

            correct.style.background="#79B8FF";
            correct.style.color="#fff";

        }

    });

});

/*==============================
        FLOATING HEART
===============================*/

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left =
    Math.random()*100+"vw";

    heart.style.top = "100vh";

    heart.style.fontSize = "28px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition = "3s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform =
        "translateY(-120vh) rotate(360deg)";

        heart.style.opacity = "0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },3000);

}

/*==============================
        AUTO HEART
===============================*/

setInterval(()=>{

    createHeart();

},5000);

/*==============================
        IMAGE CLICK
===============================*/

document.querySelectorAll(".photo img")

.forEach((img)=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});

/*==============================
        HERO PARALLAX
===============================*/

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero-bg");

    if(hero){

        hero.style.transform =
        `translateY(${window.scrollY*0.25}px)`;

    }

});

/*==============================
        BUTTON RIPPLE
===============================*/

document.querySelectorAll("button")

.forEach((button)=>{

    button.addEventListener("click",function(e){

        const ripple =
        document.createElement("span");

        ripple.className="ripple";

        ripple.style.left=
        e.offsetX+"px";

        ripple.style.top=
        e.offsetY+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*==============================
        FINISH
===============================*/

console.log(

"Blue Scrapbook Loaded Successfully 🤍"

);
