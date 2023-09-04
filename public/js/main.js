// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};

window.addEventListener("click", (event) => {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
});

// menu end
const formBtn = document.querySelectorAll(".formBtn");
const formModal = document.getElementById("formModal");
const formClose = document.getElementById("formClose");
formBtn.forEach((e) => {
  onBtnClick(e);
});
function onBtnClick(btnItem) {
  btnItem.addEventListener("click", function () {
    formModal.classList.toggle("active");
    body.classList.toggle("active");
  });
}
formClose.onclick = function () {
  formModal.classList.toggle("active");
  body.classList.toggle("active");
};

window.addEventListener("click", (event) => {
  if (event.target == formModal) {
    formModal.classList.remove("active");
    body.classList.remove("active");
  }
});
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const links = document.querySelectorAll(".nav__inner-link");

links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}

window.onscroll = function () {
  scrollFunc();
};
// scroll end
/*mobile slider */
$(".slider").slick({
  infinite: false,
  speed: 300,
  slideToScroll: 1,
  slidesToShow: 3,
  adaptiveHeight: false,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        dots: true,
        slideToScroll: 1,
      },
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        dots: true,
        slideToScroll: 1,
      },
    },
  ],
});
function mobileOnlySlider() {
  $(".howSlider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 751) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 751) {
    $(".howSlider").addClass("sliderMob");
    if (!$(".howSlider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".howSlider").removeClass("sliderMob");
    if ($(".howSlider").hasClass("slick-initialized")) {
      $(".howSlider").slick("unslick");
    }
  }
}
resizeListener();
window.addEventListener("resize", () => {
  resizeListener();

});
