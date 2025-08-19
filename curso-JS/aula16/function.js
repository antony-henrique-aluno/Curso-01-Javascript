//Exemplo de funcão de par impa 
function parImpa(n){
    if (n % 2 === 0) {
        return "par";
    }else{
        return "impar";
    }
}

let resultado = parImpa(7);
console.log(resultado);