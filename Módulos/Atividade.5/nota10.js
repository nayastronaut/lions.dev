let notas = [6, 7, 9]
let somaNotas = 0
let media = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let notasAcimadamedia = 0
let notasAbaixodamedia = 0

    for(let i = 0; i < notas.length; i++) {
        soma = somaNotas + notas[i]
    }
    media = soma / notas.length

    for(let i = 0; i < notas.length; i++) {
       if (notas[i] > notaAlta) {
       notaAlta = notas[i]
       }

       if(notas[i] < notaBaixa)
        notaBaixa = notas[i]
    }
    
     console.log(notaAlta)
     console.log(notaBaixa)

    for(let i = 0; i < notas.length; i++) {
        if(notas[i] > media) {
        notasAcimadamedia++
       }
    }
    console.log(`O vetor notas possui ${notasAcimadamedia} notas acima da media ${media}.`)
    
    notas.push(14)
    console.log(notas)
    
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] < 8) {
        notasAbaixodamedia++
       }
    }
     console.log(`O vetor notas possui ${notasAbaixodamedia} notas abaixo da media ${media}.`)

     notas.push(14)
     console.log(notas)


     
     
     


