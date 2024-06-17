let vetorInicial = [27, 10, 3, 0, 20, 5, 6, 3]
let vetorPares = []
let vetorImpares = []

vetorInicial.push(15)

        for(let i = 0; i < vetorInicial.length; i++) {
         if(vetorInicial[i] % 2 == 0) {
            vetorPares.push(vetorInicial[i])
         } else{
            vetorImpares.push(vetorInicial[i])
         }
        }

        console.log(vetorPares)
        console.log(vetorImpares)
        console.log(vetorInicial)
