const databaseStudents = [
    {
        nome: "Tatsuya",
        nota: "100",
        turma:  "TII2002T-01",
    } ,
    {
        nome: "Carlos",
        nota: "99",
        turma:  "TI2253T-02",
    } ,
    {
        nome: "Kayle",
        nota: "94",
        turma:  "TII2002T-01",
    } ,
    {
        nome: "Janna",
        nota: "78",
        turma:  "TII2002T-01",
    },  
    {
        nome: "Diana",
        nota: "75",
        turma:  "TII2002T-01",
    } ,
    {
        nome: "Draven",
        nota: "73",
        turma:  "TI2253T-02",
    } ,
    {
        nome: "Cassiopeia",
        nota: "65",
        turma:  "TI2253T-02",
    } ,
    {
        nome: "Tanjiro",
        nota: "50",
        turma:  "TI2253T-02",
    },  
];

const databaseTeachers = [
    {
        teacher: "Claudio Iwakami",
        turma:  "TII2002T-01",
    } ,
    {
        teacher: "Sung Jin Woo",
        turma:  "TII2002T-01",
    } ,
    {
        teacher: "Haipo Dong",
        turma:  "TI2253T-02",
    } ,
    {
        teacher: "Fujiwara Chika",
        turma:  "TI2253T-02",
    },   
];

const databaseClassrooms = [
    {

        nome:  "TII2002T-01",
        professores: "Fujiwara Chika | Haipo Dong "
    } ,
    {
        professores: "Claudio Iwakami| Sung Jin Woo",
        nome:  "TI2253T-02",
    } 
];

const findSelected= (name,classroom,note = "") => { 

// Create the table
const column1 = document.createElement("li");
column1.appendChild(document.createTextNode(`${name}`));

const column2 = document.createElement("li");
column2.appendChild(document.createTextNode(`${note}`));

const column3 = document.createElement("li");
column3.appendChild(document.createTextNode(`${classroom}`));
 
//Create the ul
const trColumn1 = document.createElement("ul");
trColumn1.appendChild(column1);
trColumn1.appendChild(column2);
trColumn1.appendChild(column3);

const div = document.querySelector(".list");
div.appendChild(trColumn1);
 

console.log(note)

}



const changeColumnName = (teacher = "",classroom="") => { 
    const liNota = document.querySelector("#nota");
    liNota.textContent = `${teacher}`;
    const liTurma = document.querySelector("#turma");
    liTurma.textContent = `${classroom}`;
    return liNota;
}

// DOM mainipulation
const domManipulation = () => { 
 // get the choosed option;
 const choose = document.getElementById("choose");
 const chooseIndex = choose.selectedIndex;

 const choosed = choose.options[chooseIndex].value;

 return { 
     choosed,
 }
}
// Input manipulation
const inputManipulation = () => { 
    const input = document.querySelector("input");
    const userSearch = input.value;
 

    return userSearch;

}
// Difine the labelText
const setLabelText = () => { 
    const {choosed} = domManipulation();
    switch (choosed){    
        case "Consultar por aluno":
            const studentLabel = document.querySelector("#findLabel");
            studentLabel.textContent = "Digite o nome do aluno";
            break;
        case "Consultar por turma":
            const classroomLabel = document.querySelector("#findLabel");
            classroomLabel.textContent = "Digite o nome da turma";
            break;
        case "Consultar por docentes":
            const teacherLabel = document.querySelector("#findLabel");
            teacherLabel.textContent = "Digite o nome do professor";
            break;
        default:
            console.log("Sorry, something went wrong")
    
    }
    
}

 

// Cadastro de usuarios
const searchFunction = () => { 
    const {choosed} = domManipulation();
    setLabelText();
   
    switch (choosed){    
        case "Consultar por aluno":
            const studentLabel = document.querySelector("#findLabel");
            studentLabel.textContent = "Digite o nome do aluno";
            const studentSearch = inputManipulation();
            const studentResult = databaseStudents.find( obj => obj.nome === studentSearch);
            const note = studentResult.nota;
            const classroom = studentResult.turma; 
            const name = studentResult.nome;
          
          
            findSelected(name,classroom,note)
            break;
        case "Consultar por turma":
            classSearch = inputManipulation();
            const {nome,professores} = databaseClassrooms.find( obj => obj.nome === classSearch);
            findSelected(nome,professores);
            const prof = "Professores"
            changeColumnName(prof);
            break;
        case "Consultar por docentes":
            const teacherSearch = inputManipulation();
            const {teacher,turma} = databaseTeachers.find( obj => obj.teacher === teacherSearch);
            findSelected(teacher,turma);
            const teach = "";
            const room = "Turmas"
            changeColumnName(teach,room);
            break;
        default:
            console.log("Sorry, something went wrong")
    
    }
}
