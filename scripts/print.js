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
        turma:  "TF1533T-05",
    } ,
    {
        nome: "Janna",
        nota: "78",
        turma:  "TS32533T-01",
    },  
    {
        nome: "Diana",
        nota: "75",
        turma:  "TS32593T-07",
    } ,
    {
        nome: "Draven",
        nota: "73",
        turma:  "TII2002T-01",
    } ,
];


const databaseTeachers = [
    {
        nome: "Claudio Iwakami",
        turma:  "TII2002T-01",
    } ,
    {
        nome: "Sung Jin Woo",
        turma:  "TII2002T-01",
    } ,
    {
        nome: "Haipo Dong",
        turma:  "TI2253T-02",
    } ,
    {
        nome: "Fujiwara Chika",
        turma:  "TI2253T-02",
    },   
];

const databaseClassrooms = [
    {

        nome:  "TII2002T-01",
        turma: "Fujiwara Chika | Haipo Dong "
    } ,
    {
        turma: "Claudio Iwakami| Sung Jin Woo",
        nome:  "TI2253T-02",
    } 
];

const domTable = (column,container) => {
  
    const trColumn = document.createElement("ul");
    trColumn.appendChild(column);
    container.appendChild(trColumn);
     
}



const findNote = (database) => { 

    const note = database.map(obj => {
        const column2 = document.createElement("li");
        column2.appendChild(document.createTextNode(`${obj.nota}`));
        console.log(column2)
        const notaContainer = document.querySelector(".notaContainer");
        const trColumn2 = domTable(column2,notaContainer)
        return trColumn2;
        
        })
}

const findName = (database) => { 
    // Coluna de nomes
    const name = database.map(obj => {
        const column1 = document.createElement("li");
        column1.appendChild(document.createTextNode(`${obj.nome}`));
        console.log(column1)
        const nomeContainer = document.querySelector(".nomeContainer");
        const trColumn1 = domTable(column1,nomeContainer)
        
        return trColumn1;
        })
}

const findClassroom = (database) => { 
    const classroom = database.map(obj => {
        const column2 = document.createElement("li");
        column2.appendChild(document.createTextNode(`${obj.turma}`));
        console.log(column2)
        const turmaContainer = document.querySelector(".turmaContainer");
        const trColumn3 = domTable(column2,turmaContainer)
        return trColumn3;
        })
    
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
   
    return choosed;

    
   }

 

  
   // Difine the labelText
   const setLabelText = () => { 
       const choosed = domManipulation();
       switch (choosed){    
           case "Consultar por aluno":
               const studentLabel = document.querySelector("#findH1");
               studentLabel.textContent = "Notas de todos os alunos";
               break;
           case "Consultar por turma":
               const classroomLabel = document.querySelector("#findH1");
               classroomLabel.textContent = "Relatório de todas as turmas";
               break;
           case "Consultar por docentes":
               const teacherLabel = document.querySelector("#findH1");
               teacherLabel.textContent = "Relatório de todos os professores";
               break;
           default:
               console.log("Sorry, something went wrong")
       
       }
       
   }
   

// Cadastro de usuarios
const searchFunction = () => { 
    const choosed = domManipulation();
    setLabelText();
    debugger;
    switch (choosed){    
        case "Consultar por aluno":
            findName(databaseStudents);
            findNote(databaseStudents);
            findClassroom(databaseStudents);
            break;
        case "Consultar por turma":
          
            findName(databaseClassrooms);
            findClassroom(databaseClassrooms);
            const teacher = "Professores"
            changeColumnName(teacher);
            break;
        case "Consultar por docentes":
          
            findName(databaseTeachers);
            findClassroom(databaseTeachers);
            const teach = "";
            const classroom = "Turmas"
            changeColumnName(teach,classroom);
            break;
        default:
            console.log("Sorry, something went wrong")
    
    }
}
 

const select =  document.getElementById("choose");
select.addEventListener("input",searchFunction);
