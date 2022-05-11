// Меню бургер
const burger = document.querySelector(".menuBurger");
const menu = document.querySelector(".menu");
if (burger) {
  burger.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// Прокрутка меню при клике
const menuLinks = document.querySelectorAll(".menuLink[data-goto]");

function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

    if (burger.classList.contains("active")) {
      document.body.classList.remove("lock");
      burger.classList.remove("active");
      menu.classList.remove("active");
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}


// Кнопка Наверх
let goUpBtn = document.querySelector(".upBtn");

window.addEventListener("scroll", trackScroll);
goUpBtn.addEventListener("click", backToTop);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goUpBtn.classList.add("show");
  }
  if (scrolled < coords) {
    goUpBtn.classList.remove("show");
  }
}
// Скрол в начало страницы
function backToTop() {
  if (window.pageYOffset > 0) {
    // window.scrollBy(0, -50);
    // setTimeout(backToTop, 0);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


// Событие "клик" на офферной кнопке
let offerBtn = document.querySelector(".offerButton");
let form = document.querySelector(".fidbackForm");
let overlayFidback = document.querySelector(".overlay__fidback");

function offerBtnClick() {
  form.classList.add("show");
  overlayFidback.classList.add("active");
  document.body.classList.toggle("lock");
}
offerBtn.addEventListener("click", offerBtnClick);

// Закрытие формы обратной связи
let closeButton = document.querySelector(".fidbackForm__closeBtn");

function closeFidbackForm() {
  form.classList.remove("show");
  overlayFidback.classList.remove("active");
  document.body.classList.remove("lock");
}
closeButton.addEventListener("click", closeFidbackForm);
overlayFidback.addEventListener("click", closeFidbackForm);


// Событие "клик" на ссылке в форме обратной связи
// Открываем форму согласия на обработку ПД
let fidbackFormLink = document.querySelector(".fidbackForm__link");
let soglasieForm = document.querySelector(".soglasiePD");
let overlaySoglasie = document.querySelector(".overlay__soglasie");

function formLinkClick() {
  soglasieForm.classList.add("show");
  overlaySoglasie.classList.add("active");
  document.body.classList.add("lock");
}
fidbackFormLink.addEventListener("click", formLinkClick);

//Закрываем форму согласия на обработку ПД
let closeBtnSoglasie = document.querySelector(".soglasiePD__closeBtn");

function closeSoglasieForm() {
  soglasieForm.classList.remove("show");
  overlaySoglasie.classList.remove("active");
  document.body.classList.remove("lock");
}
closeBtnSoglasie.addEventListener("click", closeSoglasieForm);
overlaySoglasie.addEventListener("click", closeSoglasieForm);


// Перевод в "строгий режим", добавляем "use strict";
// и оборачиваем в анонимную функцию,
// чтобы наши переменные не попали в глобальную область видимости
// (т.е. чтобы не было конфликта с другими скриптами)
// (function () {
//     // Строгий режим
//     "use strict";
// })();


// Маска ввода номера телефона

