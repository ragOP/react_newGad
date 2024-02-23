// Define ctaClick function
function ctaClick() {
    window.location.href = "https://www.rightamericanflag.com/cfv1/?affId=CDB7208E&c1=11458&c2=&sub5=&oid=1928&affid=11458&gtm_debug=1707756768489";
}

// // OptBtn1 click event
// document.querySelectorAll(".optBtn1").forEach(btn => {
//     btn.addEventListener("click", function () {
//         this.parentElement.parentElement.nextElementSibling.style.display = "block";
//         this.parentElement.parentElement.style.display = "none";
//         window.scrollTo(0, 0);
//     });
// });

// // Back-btn-actv click event
// document.querySelectorAll(".back-btn-actv").forEach(btn => {
//     btn.addEventListener("click", function () {
//         this.parentElement.previousElementSibling.style.display = "block";
//         this.parentElement.style.display = "none";
//         window.scrollTo(0, 0);
//     });
// });

// // Next-btn click event
// document.querySelectorAll(".next-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.querySelector(".step2").style.display = "none";
//         document.querySelector(".step3").style.display = "block";
//         window.scrollTo(0, 0);
//     });
// });

// // Use const for startTimer function
const startTimer = (duration) => {
    let timer = duration;
    let minutes, seconds;

    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("test-timer").innerHTML =
            `Thank you Patriot!<br /> Your <span style="color:red">FREE</span> Limited Edition Trump 2024 Flag and Gold Coin have been reserved for<br /><span style="color:red">${minutes}:${seconds}</span> minutes`;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

// // helloworld function
const helloworld = () => {
    document.getElementById("click-below-text").innerHTML =
        `<br/><span style="font-weight:bold;color:red">IMPORTANT:</span> After you confirm your zip code on the next page <span style="font-weight:bold;color:red">we WILL contact you by phone within 15 minutes</span>, to verify your address & ensure your application is real.`;

    document.querySelector(".step6").style.display = "none";
    document.querySelector(".stepfinal").style.display = "block";
    document.querySelector(".progress-bar").style.width = "100%";
    document.querySelector(".progress-bar").setAttribute("aria-valuenow", "100");
    document.querySelector(".progress-bar").innerHTML = "100% Complete";

    startTimer(60 * 10);
};

// // Attach click event listeners to #q1 and #q65
// document.getElementById("q1").addEventListener("click", function () {
//     document.querySelector(".step0").style.display = "none";
//     document.querySelector(".step1").style.display = "block";
// });

// document.getElementById("q65").addEventListener("click", function () {
//     document.querySelector(".step0").style.display = "none";
//     document.querySelector(".step1").style.display = "block";
// });

// // Initialize counting
// var countingItem = document.getElementById("countingItem");
// var seconds = 59;
// var minutes = 4;

// function counting() {
//     seconds -= 1;
//     if (seconds == 0) {
//         minutes -= 1;
//         seconds = 60;
//     }
//     if (seconds > 0 && minutes >= 0) {
//         if (seconds < 10) {
//             countingItem.innerHTML = "0" + minutes + ":0" + seconds;
//         } else {
//             countingItem.innerHTML = "0" + minutes + ":" + seconds;
//         }
//         window.setTimeout(counting, 1000);
//     } else {
//         countingItem.textContent = "00:00";
//     }
// }

// // Start counting
// counting();

