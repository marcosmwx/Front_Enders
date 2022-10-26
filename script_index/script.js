const nav = document.querySelector("nav"),
        toggleBtn = nav.querySelector(".toggle-btn");
    

    toggleBtn.addEventListener("click", ()=> {
        nav.classList.toggle("open");
    });
    (function () {
        const segundos = 1000,
              minutos = segundos * 60,
              hora = minutos * 60,
              dia = hora * 24;
      
        let hoje = new Date(),
            dd = String(hoje.getDate()).padStart(2, "0"),
            mm = String(hoje.getMonth() + 1).padStart(2, "0"),
            yyyy = hoje.getFullYear(),
            nextano = yyyy + 1,
            diaMes = "11/02/",
            data = diaMes + yyyy;
        
        hoje = mm + "/" + dd + "/" + yyyy;
        if (hoje > data) {
          data = diaMes + nextano;
        }
        //end
        
        const countDown = new Date(data).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("dias").innerText = Math.floor(distance / (dia))+" :",
                document.getElementById("horas").innerText = Math.floor((distance % (dia)) / (hora))+" :",
                document.getElementById("minutos").innerText = Math.floor((distance % (hora)) / (minutos))+" :",
                document.getElementById("segundos").innerText = Math.floor((distance % (minutos)) / segundos);
      
              
              if (distance < 0) {
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
             
            }, 0)
        }());
        const debounce = function(func, wait, immediate) {
          let timeout;
          return function(...args) {
            const context = this;
            const later = function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        };
        
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

    
 })

}
window.addEventListener('scroll', function(){
  animeScroll();
});
