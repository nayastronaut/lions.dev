const readline = require ('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.output
})
let rodadas = 0
let maximoRodadas = rodadas [0]
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
console.log('Bem-vindos ao jogo de advinhação!!')              
jogar() 
    
        rodadas = rodadas + 1
        if(rodadas <= maximoRodadas) {
        rl.question (` Tente advinhar o numero: `, (numero) => {
            if(numeroAleatorio > numero) {
                console.log(`Muito baixo!`)
                jogar()
            }else if (numeroAleatorio < numero) {
                console.log(`Muito alto!`)
                jogar()
            } else {
                console.log(`Voce acertou o numero era ${numeroAleatorio}.`)
                jogar()
                rl.close()
                
            }
        })
    }    

