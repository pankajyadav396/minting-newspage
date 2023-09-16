

$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
    
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }
    ]
});



/*count-down*/

var countDownDate = new Date("november 5, 2023 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + " : " + hours + " : "
        + minutes + "  : " + seconds + "  ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

let AddBtn = document.querySelector(".btn-add");
let SubBtn = document.querySelector(".btn-sub");
let p = document.querySelector(".no-100");

AddBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    SaveBtn.classList.remove("btn-disabled");
})

SubBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
    SaveBtn.classList.remove("btn-disabled");
})
    
