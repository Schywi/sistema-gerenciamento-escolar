 
 const button = document.querySelector("button");
 
const database = [
    {
        username:"Kayle",
        password:123,
    }
]
 

const signIn  = () => {
   
   
    const username = prompt("Digite seu nome de usuario:")
    const password = Number(prompt("Digite sua senha:"))

    console.log(username);
    console.log(password );
    
    
    if( username === database[0].username && password == database[0].password) {
       
 
       window.location.replace("./pages/dashboard/dashboard.html");
    } else {
        alert("Dados não encontrados, digite novamente")
    }
     
}
 

button.addEventListener("click",signIn);
 