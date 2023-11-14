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























// let hiddentopTitleContent = document.querySelector(".hidden_topTitleContnet");
// let hiddenCovilla = document.querySelector(".hiddenCovilla");
// let hiddenTopSelections = document.querySelector(".hiddenTopSelections");
// let hiddenDestinationBox = document.querySelector(".hidden_destinationsBox");
// let covilla = document.querySelector(".covilla");
// let destinationsBox = document.querySelector(".destinationsBox");
// let topSelections = document.querySelector(".TopSelections");
// let navButt = document.querySelectorAll(".navButt");
// let navButtArray = Array.from(navButt);
// let quicklinks = document.querySelector(".quicklinks");
// console.log(quicklinks);
// window.onscroll = function () {
//     let scrollPosition = document.documentElement.scrollTop;
//     console.log(scrollPosition);
//     console.log(hiddentopTitleContent.style.height);

//     hiddentopTitleContent.style.opacity = scrollPosition > 0 ? 1 : 0;

//     covilla.style.opacity = Math.max(0, 1 - scrollPosition / 300);
//     destinationsBox.style.opacity = Math.max(0, 1 - scrollPosition / 300);

//     hiddenCovilla.style.opacity =
//         scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
//     hiddenDestinationBox.style.opacity =
//         scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;
//     hiddenTopSelections.style.opacity =
//         scrollPosition > 150 ? Math.min(1, (scrollPosition - 150) / 150) : 0;

//     navButtArray.map((butt) => {
//         if (scrollPosition > 225) {
//             butt.style.display = "block";
//             butt.style.padding = "10px";
//             hiddenTopSelections.style.display = "none";
//         } else {
//             butt.style.display = "none";
//             hiddenTopSelections.style.display = "flex";
//         }

//         butt.addEventListener("mouseover", function (e) {
//             console.log("butt clicked", e.target);
//             e.target.style.backgroundColor = "#f7f8fc";
//         });
//         butt.addEventListener("mouseleave", function (e) {
//             e.target.style.backgroundColor = "";
//         });
//     });
//     // if (scrollPosition === 0) {
//     //   hiddentopTitleContent.style.height = "0px";
//     // } else
//     if (scrollPosition < 300) {
//         hiddentopTitleContent.style.height = (scrollPosition / 300) * 100 + "px";
//     } else {
//         hiddentopTitleContent.style.height = "100px";
//     }

//     // scroll quick links

//     // if (scrollPosition > 800) {
//     //   quicklinks.style.position = "sticky";
//     //   quicklinks.style.top = "100px";
//     // } else {
//     //   quicklinks.style.position = "static";
//     // }
// };

// // DESTINATIONBox CLICK EVENT
// let destination_options = document.querySelector(".destination_options");
// let hidden_destinationsBox = document.querySelector(".hidden_destinationsBox");
// let updownicon = document.querySelectorAll(".updownicon");
// const svgup = `<svg t="1684274635165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" width="10" height="10"><path d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667" fill="#e6e6e6" p-id="2083"></path></svg>`;
// const svgdown = `<svg t="1684273795786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="10" height="10"><path d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667" fill="#ffffff" p-id="2746"></path></svg>`;
// let detinationBoxEvent = function () {
//     console.log(destination_options.classList);
//     destination_options.classList.toggle("open");
//     if (destination_options.classList.length === 2) {
//         updownicon[1].innerHTML = svgup;
//     } else {
//         updownicon[1].innerHTML = svgdown;
//     }
// };

// destinationsBox.addEventListener("click", () => detinationBoxEvent());

// let sidebar = document.querySelector(".sidebar");
// let hamburger = document.querySelector(".hamburger");
// let hamburgerContainer = document.querySelector(".hamburgerContainer");
// const svghamburger = `<svg class="hamburger" t="1684005706799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2380" width="20" height="20"><path d="M55.466667 123.733333h917.333333v42.666667H55.466667zM55.466667 490.666667h917.333333v42.666666H55.466667zM55.466667 857.6h917.333333v42.666667H55.466667z" fill="#283F59" p-id="2381"></path></svg>`;
// const svgclose = `<svg class="hamburger" t="1684005801533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="60" height="60"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="3705" fill="#283F59"></path></svg>`;

// hamburgerContainer.addEventListener("click", function () {
//     console.log(sidebar.classList);
//     if (sidebar.classList.length === 2) {
//         hamburgerContainer.innerHTML = svghamburger;
//     } else {
//         hamburgerContainer.innerHTML = svgclose;
//     }
//     sidebar.classList.toggle("open");
// });
