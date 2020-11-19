
const database = [];

// objeto de cadastro
class register {
    constructor(choosed,name,tel,email,address,CPF){
        this.choosed = choosed;
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.address = address;
        this.CPF = CPF; 
    }
}

// classroom object
class classrooms { 
    constructor(name,teacher,students){
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }
}

// Teacher object
class teachers  extends register{
    constructor(className,subject,choosed,name,tel,email,address,CPF){
        super(choosed,name,tel,email,address,CPF);
        this.className = className;
        this.subject = subject;
    }
}

// Stutends object
class students extends register{
    constructor(className,note,choosed,name,tel,email,address,CPF){
        super(choosed,name,tel,email,address,CPF);
        this.className = className;
        this.note = note;
    }
}
const button = document.querySelector("#button");

// DOM mainipulation
const domManipulation = () => { 
 // get the choosed option;
 const choose = document.getElementById("choose");
 const chooseIndex = choose.selectedIndex;

 const choosed = choose.options[chooseIndex].value;

// get all input elements.
 const userData = document.getElementsByTagName("input")
 const name = userData[0].value
 const tel = Number(userData[1].value)
 const email = userData[2].value
 const address = userData[3].value
 const CPF = Number(userData[4].value)

 return { 
     choosed,
     name,
     tel,
     email,
     address,
     CPF
 }
}
 

// Cadastro de usuarios
const registerFunction = () => { 
    const {choosed,name,tel,email,address,CPF} = domManipulation();
   
    switch (choosed){    
        case "Processo seletivo":
            const register = new register(choosed,name,tel,email,address,CPF)
            database.push(register);
            console.log(database);
            return database;
        case "Matricula alunos":
           // const className = classroom.name.value;
            const className = "TI2034"
            const note = 0;
            const student = new students(className,note,choosed,name,tel,email,address,CPF)
            database.push(student);
            console.log(database);
            return database;
        case "Cadastro de turmas":
            let teacher = "Claudio";
            const student1 = "Carlos";
            const classroom = new classrooms(name,teacher,student1);
            database.push(classroom);
            console.log(database);
            return database;
        case "Matricula de docentes":
            const subject = subject();
            
            teacher = new teachers(className,subject,choosed,name,tel,email,address,CPF)
            database.push(teacher);
            console.log(database);
            return database;
        default:
            console.log("Sorry, something went wrong")
    
    }
   
   
}

button.addEventListener("click",registerFunction);
