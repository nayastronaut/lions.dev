let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
let precoMaximo = precos[0]
let precoMinimo = precos[0]
let soma = 0
let média = 0
let precosAcimadamedia = 0
let barato = 0

   for(let i = 0; i < precos.length; i++) {
         soma = soma + precos[i]
       }

         media = soma / precos.length;
         console.log(`0 valor da média é ${media}`)

      for( let i = 0; i < precos.length; i++ ) {
        if (precos[i] > precoMaximo) {
        precoMaximo = precos[i]

        } if (precos[i] < precoMinimo)
        precoMinimo = precos[i]
        } 

        console.log(`O preço máximo é: ${precoMaximo}`)
        console.log(`O preço minímo é: ${precoMinimo}`)

      for(let i = 0; i < precos.length; i++) {
         if(precos[i] > 5.0) {
         precosAcimadamedia++
         }
         }
         console.log(`Os preços acima de cinco reais são: ${precosAcimadamedia}.`)
    
     precos.push(35)
     console.log(precos)
      
      for(let i = 0; i < precos.length; i++) {
         if(precos[i] < 10.00) {
         } else {
          (10 < 20) 
         }
         barato++
         }
         
         console.log(`Os preços abaixo de 20.00 são: ${barato}.`)

   
