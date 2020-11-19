 
 const button = document.querySelector("button");
 const register = document.querySelector("#cadastrar");
 
const database = [
    {
        username:"Kayle",
        password:123,
    }
]
 


const signUp = () => {
    const username = prompt("Digite seu nome de usuario:");
    const password = Number(prompt("Digite sua senha:"));
   
    const user = {
        username,
        password,
    }
     
    database.push(user);
}
 

const signIn  = () => {
    const username = prompt("Usuario:")
    const password = Number(prompt("Senha:"))

    const validateUsername = database.find(users => users.username === username);
    const validatePassword = database.find(users => users.password === password);
    
    if(validateUsername && validatePassword) {

     window.open("./pages/dashboard/dashboard.html");

    } else {
        alert("Dados não encontrados, digite novamente")
    }
     
}
 

button.addEventListener("click",signIn);
register.addEventListener("click",signUp);