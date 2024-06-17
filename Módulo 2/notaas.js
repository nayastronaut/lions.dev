let nota

console.log('Qual é a nota?')
    process.stdin.once('data', function(data) {
        nota = data.toString().trim()
        nota = classificacao(nota)
        if(nota == 'A'|| nota == 'B'||nota == 'C') {
        console.log(`Você foi aprovado:${nota}`)
        }else if(nota == 'D'|| nota == 'F'){
        console.log(`Você foi reprovado:${nota}`)
        }
        process.exit()
    })

    function classificacao(nota){
        switch(true){
            case (nota >= 90 && nota <=100):
                return "A" ;
                
            case (nota >= 80 && nota <= 89):
                return "B" ;
            
            case (nota >= 70 && nota <= 79): 
                return "C" ;
                
            case (nota >= 60 && nota <= 69):
                return "D" ;
             
            case (nota >= 0 && nota <= 59):
                return "F" ;
            default:
 
            console.log('Nota Invalida!')
        }
    }





    
 