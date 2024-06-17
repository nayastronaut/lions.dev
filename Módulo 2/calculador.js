function calculadora(numero1, numero2 , operacao) {
    if(operacao == '+') {
        return numero1 + numero2
    }
    else if(operacao == '-') {
        return numero1 - numero2
    } 
    else if(operacao == '*') {
        return numero1*numero2
    }
    else {
         return numero1/numero2
    } 
  }


    console.log(calculadora(5,3,'+'))
    console.log(calculadora(5,3,'-'))
    console.log(calculadora(5,3,'*'))
    console.log(calculadora(5,3,'/'))

    
