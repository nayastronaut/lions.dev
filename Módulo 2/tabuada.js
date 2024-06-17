let número

console.log("Qual tabuada você gostaria de saber?")
    process.stdin.once('data', function(data) {
        número = parseInt(data.toString().trim())
        processamento(número)
        process.exit()
    })
function processamento(número) {
    for(let tabuada = 0; tabuada <=10; tabuada++){
    console.log(`${número} x ${tabuada} = ${número*tabuada}`)    
    }
    }