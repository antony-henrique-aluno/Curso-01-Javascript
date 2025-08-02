//Condições multipla.

//Condições multipla serve para valores fixos. 
// É muito util no mundo da programação, principalmente
// quando eu quero trabalhar com valores fixos, como eu
// acabei de falar. Ela não serve muito para intervalo 
// de valores como a gente exemplificou ali: o bom dia, 
// boa tarde e boa noite. Essa  


var agora = new Date()
var diaSemana = agora.getDay()

/*  0 Domingo
    1 Segunda 
    2 Terça
    3 Quarta
    4 Quinta
    5 Sexta
    6 Sabado */

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break; //A função break é obrigatoria na hora de usar o switch
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira") 
        break;
    case 3:
        console.log("Quarta-Feira") 
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        
}