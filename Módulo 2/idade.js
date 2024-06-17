let nome 
let idade 
const ano = 2024

console.log("Qual é seu nome?")

 process.stdin.once('data', function(data) {
 nome = data.toString().trim()
 console.log("Qual é sua idade?")

process.stdin.once('data', function(data) {
idade = parseInt(data.toString().trim())
processamento(nome, idade)
process.exit()
})
 })
 function processamento(nome,idade) {
    let diferença = ano - idade
    console.log(`Olá ${nome}, você tem ${idade} anos e nasceu em ${diferença}, se voce já fez aniversário, caso ainda não voce nasceu em ${diferença -1}`)
 }
