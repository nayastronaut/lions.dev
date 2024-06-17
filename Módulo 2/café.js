let resposta
let gostaDeCafe

console.log("Você gosta de café?")
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})
  function processamento(resposta) {
    if(resposta == 'sim' || 'Sim') {
    gostaDeCafe = true
    } else if (resposta == 'não' || 'Não') {
    gostaDeCafe = false
    }
    if(gostaDeCafe == true) {
    console.log("Café é bom") 
    } else {
     console.log('Você gosta de café?')
    }
  }

    
    