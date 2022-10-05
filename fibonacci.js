// execicio de do while 
function criarFibonacci() {
    let num = 0;
    let numAnterior = 0;
    let auxiliar = 1;
    let pares = [];
    let impares = [];
    do {
        num = numAnterior;
        numAnterior = auxiliar;
        auxiliar = num + numAnterior;
        if (auxiliar % 2 == 0) {
            pares.push(auxiliar)
        } else {
            impares.push(auxiliar)
        }
    } while (auxiliar != 987)
    console.log(pares);
    console.log(impares);
}
criarFibonacci();