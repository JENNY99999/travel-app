// 1. FAMILY TRAVEL AGENCY----------------------------------

// let nav to show when scroll down
const nav = document.querySelector('.heading .nav')
const logo = document.querySelector('.logo')
const denstination = document.querySelector('.denstination1')
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop < 70) {
        nav.style.top = scrollTop - 70 + 'px'
        logo.style.color = '#ececf4'
        destination.style.color = '#ececf4'
    } else if (scrollTop = 70) {
        nav.style.top = 0 + 'px'
        logo.style.color = '#081c3a'
        destination.style.color = '#081c3a'
    }
})


// click menu to show explore vocation
const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const rotatebox = document.querySelector('.rotatebox')


const svgcross = `<svg class=menubar xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`
const svgmenu = ` <svg class=menubar xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`
menu.addEventListener('click', function () {
    console.log(sidebar.classList);
    if (sidebar.classList.length === 2) {
        rotatebox.innerHTML = svgmenu;
        rotatebox.style.animation = 'rotate-appear-animation 1s ease-in-out forwards'

    } else {
        rotatebox.innerHTML = svgcross;
        rotatebox.style.animation = 'rotate-disappear-animation 1s ease-in-out forwards'
    }
    sidebar.classList.toggle('open');
});



// destination click to show options
let destination_options = document.querySelector('.destination_options');
let destination = document.querySelector('.destination');
destination.addEventListener('click', function () {
    destination_options.classList.toggle('open')
    destination.classList.toggle('uparrow')
})


//click slider in right corner to change background
const arrowright = document.querySelector('.arrowright')
const arrowleft = document.querySelector('.arrowleft')
const pname = document.querySelector('.pname')
const ptext = document.querySelector('.ptext')
const price = document.querySelector('.price')
const header = document.querySelector('.header')
const slidedata = [
    { bg: 'https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg', name: 'Thessaloniki, Greece', price: 'STARTING AT $6700' },
    { bg: 'https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg', name: 'Bahariya Oasis, Egypt', price: 'STARTING AT $7800' },
    { bg: 'https://assets.website-files.com/60675f13ea324fdd4af9ef2a/6074ef622e17622ba2a018a4_Villa0017.jpeg', name: 'Denpasar, Indonesia', price: 'STARTING AT $8900' },

]
let i = 0

arrowright.addEventListener('click', function () {

    i++
    i = i > slidedata.length - 1 ? 0 : i
    header.style.background = `url(${slidedata[i].bg})`
    pname.innerHTML = slidedata[i].name;
    ptext.innerHTML = slidedata[i].price;
    zoomin()
})


function zoomin() {
    pname.classList.remove('zoomin');
    void pname.offsetWidth; //stop and render
    pname.classList.add('zoomin')
    ptext.classList.remove('zoomin');
    void ptext.offsetWidth;
    ptext.classList.add('zoomin')

}
arrowleft.addEventListener('click', function () {
    i--
    i = i < 0 ? i = slidedata.length - 1 : i
    header.style.background = `url(${slidedata[i].bg})`
    pname.innerHTML = slidedata[i].name
    ptext.innerHTML = slidedata[i].price

})


//circle and dot enlarge


let circleouter = document.querySelector(".circleouter");
let circleinner = document.querySelector(".circleinner");
let dotdashed = document.querySelector(".dotdashed");
let videoBox = document.querySelector(".videoBox");
let videoContent = document.querySelector(".videoContent");
let dot = document.querySelector(".dot");
let model = document.querySelector("#model")

dotdashed.addEventListener("mouseenter", function () {
    model.style.display = 'block'
    circleouter.style.opacity = "1";
    circleinner.style.opacity = "1";
    videoBox.style.opacity = "1";
    videoBox.style.transform = "scale(5)";
    circleouter.style.animation =
        "outsideC 4s  linear infinite normal forwards";
    circleinner.style.animation = "insideC 3.5s linear infinite normal forwards";
    dotdashed.addEventListener("mousemove", function (e) {
        let leftX = e.offsetX;
        let topY = e.offsetY;
        console.log(e.offsetX);
        console.log(e.offsetY);
        console.log(leftX);
        let borderX = dot.offsetWidth - dotdashed.offsetWidth;
        let borderY = dot.offsetHeight - dotdashed.offsetHeight;

        if (leftX <= 0) {
            leftX = 0;
        } else if (leftX >= borderX) {
            leftX = borderX;
        }
        if (topY <= 0) {
            topY = 0;
        } else if (topY >= borderY) {
            topY = borderY;
        }
        dotdashed.style.left = leftX + "px";
        dotdashed.style.top = topY + "px";
    });




});
dotdashed.addEventListener("mouseleave", function () {
    model.style.display = 'none'
    circleouter.style.opacity = "0";
    circleinner.style.opacity = "0";
    videoBox.style.opacity = "0";
    videoBox.style.transform = "scale(0)";
    circleouter.style.animation = "no";
    circleinner.style.animation = "no";
    dotdashed.style.left = "19px";
    dotdashed.style.top = "19px";
});


// 2. COVILLA DESTINATIONS--------------------------------------

//worldswiper

var worldSwiper = new Swiper(".worldSwiper", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: -20,
    centeredSlides: true,
    loop: true,
    noSwiping: true,

    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

// 3. COVILLA BENEFITS------------------------------------------

// 4.  Review---------------------------------------------
const reviewData = [
    { text: '1. Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac <br> neque. Sedvitae sollicitudin elit, ac tristique  nisi. Pellentesque<br> rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae <br> lobortis enim.', name: 'Wilson Tomales' },
    { text: '2. Traveling to new places is an exciting way to experience different<br> cultures and expand your horizons. Taking a vacation allows you to <br>relax, recharge, and create lifelong memories with loved ones.', name: 'Samantha V ohnhale' },
    { text: '3. Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac <br> neque. Sedvitae sollicitudin elit, ac tristique  nisi. Pellentesque<br> rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae <br> lobortis enim.', name: 'Tammy Georgeon' },
    { text: '4. Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac <br> neque. Sedvitae sollicitudin elit, ac tristique  nisi. Pellentesque <br>rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae <br> lobortis enim.', name: 'Emily Camphon' },
    { text: '5. Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac <br> neque. Sedvitae sollicitudin elit, ac tristique  nisi. Pellentesque <br>rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae <br> lobortis enim.', name: 'Cassie Shamath' },

]
const btnl = document.querySelector('.btnleft')
const btnr = document.querySelector('.btnright')
let reviewText = document.querySelector('.reviewText')
let reviewName = document.querySelector('.reviewName')
let background_number = document.querySelectorAll(".background_number div ");
let background_current = 0;

btnl.addEventListener("click", function () {
    if (background_current === 0) {
        background_current = background_number.length - 1;
    } else {
        background_current--;
    }
    render();
});
btnr.addEventListener("click", function () {
    if (background_current === background_number.length - 1) {
        background_current = 0;
    } else {
        background_current++;
    }
    render();
});

function render() {
    for (let i = 0; i < background_number.length; i++) {
        if (i === background_current) {
            background_number[i].style.borderLeft = "4px solid white";
            background_number[i].style.borderRadius = "2px";
            reviewText.innerHTML = reviewData
            [i].text
            reviewName.innerHTML = reviewData
            [i].name
            reviewText.classList.remove('zoomin');
            void reviewText.offsetWidth; //stop and render
            reviewText.classList.add('zoomin')
            reviewName.classList.remove('zoomin');
            void reviewName.offsetWidth;
            reviewName.classList.add('zoomin')
        } else {
            background_number[i].style.borderLeft = "none";
            background_number[i].style.fontWeight = "400";
        }
    }
}

const places = document.querySelector(".places");
const place = document.querySelectorAll(".place");
const placeCircle = document.querySelectorAll(".placeCircle");
const placeDot = document.querySelectorAll(".placeDot");
const placeID = document.querySelectorAll(".placeID");
const placeName = document.querySelector(".placeName");

let handlePlaceclick = function (e) {
    console.log(e.target);
    console.log(e.target.dataset);
    let current = e.target.dataset.id - 1;
    console.log(current);
    for (let i = 0; i < place.length; i++) {
        if (current === i) {
            place[i].style.borderBottom = "2px solid #081c3a";
            placeCircle[i].style.transform = "scale(3.2)";
            placeCircle[i].style.border = "1px solid #081c3a";
            placeDot[i].style.backgroundColor = "#081c3a";
            placeID[i].style.display = "flex";
        } else if (current < i) {
            place[i].style.borderBottom = "2px solid #e6e6f3";

            placeCircle[i].style.transform = "scale(0.6)";
            placeCircle[i].style.border = "1px solid #e6e6f3";
            placeDot[i].style.backgroundColor = "#e6e6f3";
            placeID[i].style.display = "none";
        } else if (current > i) {
            place[i].style.borderBottom = "2px solid #081c3a";
            placeDot[i].style.backgroundColor = "#081c3a";
            placeCircle[i].style.border = "1px solid #e6e6f3";

            placeCircle[i].style.transform = "scale(0.6)";
            placeID[i].style.display = "none";
        }
    }
};

places.addEventListener("click", (e) => handlePlaceclick(e));

let workLeft = document.getElementById('workLeft')
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 70 && scrollTop < 4900) {
        workLeft.style.marginTop = '80px'
    } else if (scrollTop > 4900 && scrollTop < 5800) {
        workLeft.style.marginTop = (scrollTop - 4900 + 80) + 'px'
    }
})


var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 5000,
});







