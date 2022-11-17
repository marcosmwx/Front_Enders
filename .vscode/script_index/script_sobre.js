const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3 )/4);
  target.forEach(function(el){

      if (windowTop > el.offsetTop){
        el.classList.add(animationClass);
    } else{
      el.classList.remove(animationClass)

    }

    console.log(el.offsetTop)
 })

}
window.addEventListener('scroll', function(){
  animeScroll();
})