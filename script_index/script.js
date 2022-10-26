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