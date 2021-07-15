const navSlide = () => {
    const burger = document.querySelector('.menu-burger');
    const nav = document.querySelector('.nav-menu');
    const navMenu = document.querySelectorAll('.nav-menu li');
    //toggle nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        //animation menu
        navMenu.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkFade ease 0.5s forwards ${index / 7}s`;
            }
        });
        //animation burger
        burger.classList.toggle('toggle');
    });
}

navSlide();