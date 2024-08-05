const menuBtn = document.querySelector('#menu-btn')
const navMenu = document.querySelector('.nav__bar')
const menuBtnIcon = menuBtn.querySelector("i")

//Open Menu Mobile 

const openMenu = () =>{
    navMenu.classList.toggle('open')

    //Aterar o icon para clouse 

      const isOpen = navMenu.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars")
}

menuBtn.addEventListener("click", openMenu)

//LOGIN & REGISTO
let registarBtn = document.querySelector('.conta-form .resistrar-btn')
let loginBtn = document.querySelector('.conta-form .login-btn')

registarBtn.onclick = () =>{
    registarBtn.classList.add('active');
    loginBtn.classList.remove('active');
     document.querySelector('.conta-form .login__form ').classList.remove('activeF')
     document.querySelector('.conta-form .register__form').classList.add('activeF')
};

loginBtn.onclick = () =>{
    
    loginBtn.classList.add('active');
    registarBtn.classList.remove('active');
     document.querySelector('.conta-form .login__form ').classList.add('activeF')
      document.querySelector('.conta-form .register__form').classList.remove('activeF')
}

//CHAMAR FORM

let logarForm = document.querySelector('.conta-form')

document.querySelector('#login-btn').onclick = () =>{
    logarForm.classList.add('abrirForm')
}

document.querySelector('#clouse-form').onclick = () =>{
    logarForm.classList.remove('abrirForm')
}

/**SWIPWE */
 var swiper = new Swiper(".home__slider", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });