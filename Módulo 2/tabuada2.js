let número
var i

console.log("Qual tabuada você gostaria de saber?")
    process.stdin.once('data', function(data) {
        número = parseInt(data.toString().trim())
        calcularTabuada(número)
        process.exit()
    })
 function calcularTabuada(número) {
    for (let i = 0; i <= 10000 ; i++){
    console.log(`${número} x ${i} = ${número * i}`)    
    }
}