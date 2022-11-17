const btn = document.querySelector("#btn-fcc");
let email = document.querySelector("#email-fcc");
let senha = document.querySelector("#senha-fcc")

btn.addEventListener('click', function(e){
    e.preventDefault()
    
        let senhas = senha.value;
       let emailp = email.value;
        if(emailp.includes("@") && emailp.includes(".com") && senhas.length >= 6){
          
            
            
        
    }  else {
        alert ("digite o email com '@ e .com' e senha de no min 6 digitos ")
    }
    

        
})