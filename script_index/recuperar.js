const btn = document.querySelector("#btn-fc");
let email = document.querySelector("#email-fc");
let senha = document.querySelector("#senha-fc")

btn.addEventListener('click', function(e){
    e.preventDefault()
    
        let senhas = senha.value;
       let emailp = email.value;
        if(emailp.includes("@") && emailp.includes(".com") && senhas.length >= 6){
            var url=new Array();
            url[0]="obrigado.html";
            
            return window.location=url[0];
    }  else {
        alert ("digite o email com '@ e .com' e senha de no min 6 digitos ")
    }
    

        
})