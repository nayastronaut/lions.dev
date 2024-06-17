let numero
let numeroAleatorio = 0

    console.log('Qual é número de lados do dado?')
        process.stdin.once('data', function(data) {
            numero = parseInt(data.toString().trim())
            numeroAleatorio = Math.floor(Math.random() * numero + 1)
            console.log(numeroAleatorio)
            process.exit()
        })



