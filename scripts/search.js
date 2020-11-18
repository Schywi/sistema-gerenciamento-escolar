const database = [
    {
        nome: "Carlos",
        nota: "10",
        turma:  "TR3253",
    } ,
    {
        nome: "Kayle",
        nota: "1",
        turma:  "TF153",
    } ,
    {
        nome: "Janna",
        nota: "2",
        turma:  "TS3253",
    } 
];

const findStudent = () => { 
   

//Get the user data
const input = document.querySelector("input")
const userSearch = input.value;
const student = database.find( obj => obj.nome === userSearch);
const note = student.nota;
const classroom = student.turma; 
const name = student.nome;


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
 