let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let notasMaximo = notas[0]
let notasMinimo = notas[0]
let notasAcimadamedia = 0
let reprovados = 0
let soma = 0
let média = 0

    for(let i = 0; i < notas.length; i++) {
       soma = soma + notas[i]
       }
     média = soma / notas.length;
     console.log(`0 valor da média é ${média}`)

    for( let i = 0; i < notas.length; i++ ) {
        if (notas[i] > notasMaximo) {
        notasMaximo = notas[i]

        } if (notas[i] < notasMinimo)
        notasMinimo = notas[i]
        } 
    
        console.log(`A nota máxima é: ${notasMaximo}`)
        console.log(`A nota minímo é: ${notasMinimo}`)

    for(let i = 0; i < notas.length; i++) {
        if(notas[i] > média) {
        notasAcimadamedia++
        }
        }
        console.log(`O vetor notas possui ${notasAcimadamedia} notas acima da media ${média}.`)
        
        notas.push(8.0)
        console.log(`A nova nota é: ${ notas }`)
    
    for(let i = 0; i < notas.length; i++) {
       if(notas[i] < 6.0) {
       reprovados++
       }
    }
       console.log(`${reprovados}`)
       
     

       