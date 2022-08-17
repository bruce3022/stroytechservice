
//---------------------------------Муню бургер--------------------------------

const iconMenu = document.querySelector(".burger-icon" );
if(iconMenu) {
    const bodyMenu = document.querySelector(".mobile__burger-menu");
    iconMenu.addEventListener("click",function () {
        document.body.classList.toggle("lock");
        iconMenu.classList.toggle("burger-icon_open");
        bodyMenu.classList.toggle("mobile__burger-menu_open");
    });
}

//---------------------------------Слайдер-------------------------------------

if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper',{
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        //Активный слайдер по центру
        centeredSlides: true,

        // Optional parameters
        loop: true,
    });
}

//----------------Показать скрыть текст главной страницы-------------------------------------

const btnClose = document.querySelector(".main-about__close");
const text = document.querySelector(".main-about__content");

if (btnClose) {
    btnClose.addEventListener("click", function () {
        text.classList.toggle("main-about__content_hide");
        this.textContent = this.textContent === 'Скрыть' ? 'Подробнее' : 'Скрыть';
    });
}

//---------маленький слайдер-------------------------------------------

/*const small = new Swiper('.small-slider',{
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    //Активный слайдер по центру
    centeredSlides: true,

    // Optional parameters
    loop: true,
});*/

//----------------Яндекс карта-----------------------------
/*ymaps.ready(init);

function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        center: [56.863311827469744,53.19822434655751],
        zoom: 17,
        controls: ['searchControl']
    }, {
        // Будет производиться поиск по топонимам и организациям.
        searchControlProvider: 'yandex#search'
    });
}*/

//---------------Маска номера телефона-----------------------------

if (document.querySelectorAll('.maskPhone')) {
    maskPhone('.maskPhone', '+7 ( ___ ) ___-__-__');
}

function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        console.log(template);
        let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i !== -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
        }
        if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
        }

    }

    for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }
}

//------------------ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАП ОКНА--------------------------------------

const button = document.querySelector('.main-button');
const modal = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const itemBtn = document.querySelector('.details-page__btn');
/*const modalClose = document.querySelector('.popup-open');*/

//открытие попап окна
if (button) {
    const modal = document.querySelector('.popup');
    button.addEventListener("click", function () {
        modal.classList.add('popup-open');
        document.body.classList.add('block');
    });
}

//открытие попап окна в серв-айтемс
if (itemBtn) {
    const modal = document.querySelector('.popup');
    itemBtn.addEventListener("click", function () {
        modal.classList.add('popup-open');
        document.body.classList.add('block');
    });
}

//закрытие по кестику
if (closePopup) {
    closePopup.addEventListener("click", function (e) {
        //блокирует перезагрузку страницы при нажатии т.к. это ссылка
        e.preventDefault();
        modal.classList.remove('popup-open');
        document.body.classList.remove('block');
    });
}

//закрытие по клавише esc
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        e.preventDefault()
        if (modal.classList.contains('popup-open')); {
            modal.classList.remove('popup-open');
            document.body.classList.remove('block');
        }
    }
});

//закрытие из любого места ??
window.addEventListener('click', function (e) {
    /*console.log('jhgjfhdg');*/
    if (e.target === modal) {
        if (modal.classList.contains('popup-open')); {
            /*modal.style.display = "none";*/
            modal.classList.remove('popup-open');
            document.body.classList.remove('block');
        }
    }
});

//----------------Показать скрыть большой текст страницы---------------------------------

const basicClose = document.querySelector(".basic-text__close");
const basicText = document.querySelector(".basic-text__column");

if (basicClose) {
    basicClose.addEventListener("click", function () {
        basicText.classList.toggle("basic-text__column_hide");
        this.textContent = this.textContent === 'Скрыть' ? 'Подробнее' : 'Скрыть';
    });
}

//--------------------------------------------------------














































