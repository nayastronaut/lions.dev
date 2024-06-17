function calcular(a, b, operador) {
    if ( operador == '+') {
        return a + b
    } else if (operador == '-') {
         return a - b
    } else if (operador == '*') {
        return a * b
    } else if (operador == '/') {
        return a / b
    } else {
    } }
     
    console.log(calcular(5,3,'*'))
    console.log(calcular(5,5,'/'))
    console.log(calcular(5,7,'-'))
    console.log(calcular(5,3,'+'))


