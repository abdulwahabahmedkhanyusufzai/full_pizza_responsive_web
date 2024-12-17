const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}      
 
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
navLink.forEach(n => n.addEventListener('click',linkAction))

const shadowHeader = () =>{
    const header=document.getElementById('header')
    
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      :header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)

const swiperPopular= new Swiper('.popular__swiper',{
    loop:true,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',
})