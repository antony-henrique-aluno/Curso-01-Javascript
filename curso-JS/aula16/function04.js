//Fatoreal

function fatorial(f){
    let fat = 1
    for (let i = f; i > 1; i--) {
        fat *= i
    }
    return fat
}

alert(fatorial(7))