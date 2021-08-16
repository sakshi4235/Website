
var slide = document.getElementById("slides");
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');

        btn1.onclick = function () {
            slide.style.transform = "translateX(0px)";
            btn1.classList.add('active');
            btn2.classList.remove('active');
        };
        btn2.onclick = function () {
            slide.style.transform = "translateX(-100%)";
            btn1.classList.remove('active');
            btn2.classList.add('active');
        };

// // Scroll Reveal
// const sr=ScrollReveal({
//     origin:'top',
//     distance:'40px',
//     duration:3000,
//     reset:true
// });
// // ScrollRevealHome
// sr.reveal('.sc1',{});
// sr.reveal('.sc2',{delay:1000});
// sr.reveal('.sc3',{delay: 1000}); 
// sr.reveal('.sc4',{delay: 1000});