/* JS responsavel por gerenciar as skills, tanto na página sobre,
quanto nas páginas individuais dos projetos */

const skills = [
            
            /* 0 */ "HTML",
            /* 1 */ "CSS",
            /* 2 */ "JavaScript",
            /* 3 */ "PHP",
            /* 4 */ "C",
            /* 5 */ "C#",
            /* 6 */ "Bootstrap",
            /* 7 */ "Jquery",
            /* 8 */ "React Native",
            /* 9 */ "Phonegap",
            /* 10 */ "MySQL",
            /* 11 */ "SQL Server",
            /* 12 */ "SQLite",
            /* 13 */ "Modelagem banco de dados",
            /* 14 */ "Criação de API",
            /* 15 */ "Consumo de API",
            /* 16 */ "GIT",
            /* 17 */ "POO",
            /* 18 */ "POC",
            /* 19 */ "GitHub",
            /* 20 */ "UI/UX"
    
];

/* Sobre mim */
const skills_sobre = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[3]}</li>
    <li>${skills[4]}</li>
    <li>${skills[5]}</li>
    <li>${skills[17]}</li>
    <li>${skills[18]}</li>
    <li>${skills[6]}</li>
    <li>${skills[7]}</li>
    <li>${skills[9]}</li>
    <li>${skills[8]}</li>
    <li>${skills[10]}</li>
    <li>${skills[11]}</li>
    <li>${skills[12]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>
    <li>${skills[14]}</li>
    <li>${skills[15]}</li>
    <li>${skills[13]}</li>
    <li>${skills[20]}</li>

`;

/* Bíblia */
const skills_biblia = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[3]}</li>
    <li>${skills[17]}</li>
    <li>${skills[6]}</li>
    <li>${skills[7]}</li>
    <li>${skills[10]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>
    <li>${skills[20]}</li>

`;

/* Conta Dias */
const skills_contaDias = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[6]}</li>
    <li>${skills[9]}</li>
    <li>${skills[12]}</li>
    <li>${skills[13]}</li>
    <li>${skills[16]}</li>
    <li>${skills[20]}</li>

`;

/* Hinário */
const skills_hinario = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[6]}</li>
    <li>${skills[9]}</li>
    <li>${skills[12]}</li>
    <li>${skills[13]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>
    <li>${skills[20]}</li>

`;

/* Manulá Baby */
const skills_manula = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[3]}</li>
    <li>${skills[17]}</li>
    <li>${skills[6]}</li>
    <li>${skills[7]}</li>
    <li>${skills[10]}</li>
    <li>${skills[13]}</li>
    <li>${skills[15]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>
    <li>${skills[20]}</li>

`;

/* Oscar Joias */
const skills_oscar = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[3]}</li>
    <li>${skills[17]}</li>
    <li>${skills[6]}</li>
    <li>${skills[7]}</li>
    <li>${skills[10]}</li>
    <li>${skills[13]}</li>
    <li>${skills[15]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>
    <li>${skills[20]}</li>

`;

/* Anotações bíblicas */
const skills_anotacoes = `

    <li>${skills[0]}</li>
    <li>${skills[1]}</li>
    <li>${skills[2]}</li>
    <li>${skills[3]}</li>
    <li>${skills[17]}</li>
    <li>${skills[6]}</li>
    <li>${skills[7]}</li>
    <li>${skills[10]}</li>
    <li>${skills[13]}</li>
    <li>${skills[16]}</li>
    <li>${skills[19]}</li>

`;

/* Recebendo todas as divs */
let div_sobre = document.getElementById("div_sobre");
let div_biblia = document.getElementById("div_biblia");
let div_contaDias = document.getElementById("div_contaDias");
let div_contaDiasM = document.getElementById("div_contaDiasM");
let div_hinario = document.getElementById("div_hinario");
let div_hinarioM = document.getElementById("div_hinarioM");
let div_manula = document.getElementById("div_manula");
let div_oscar = document.getElementById("div_oscar");
let div_anotacoes = document.getElementById("div_anotacoes");

/* Alterando os HTML's */
div_sobre.innerHTML = skills_sobre;
div_biblia.innerHTML = skills_biblia;
div_contaDias.innerHTML = skills_contaDias;
div_contaDiasM.innerHTML = skills_contaDias;
div_hinario.innerHTML = skills_hinario;
div_hinarioM.innerHTML = skills_hinario;
div_manula.innerHTML = skills_manula;
div_oscar.innerHTML = skills_oscar;
div_anotacoes.innerHTML = skills_anotacoes;