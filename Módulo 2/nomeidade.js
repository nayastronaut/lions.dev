let nome 
let idade
let diferença

console.log("Qual é o seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Qual é sua idade?")
        
    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
        
function processamento(nome, idade, diferença){
if(idade >= 18){
    console.log(`${nome}, Você já é maior de idade`)
}
else if(idade < 18) {
diferença = 18 - idade
    console.log(`${nome}, você vai ser maior de idade em ${diferença} em anos`)
    }
}

