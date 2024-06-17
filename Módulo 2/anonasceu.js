let nome 
let idade
let aniversário 
const ano = 2024

console.log("Qual é seu nome?")

 process.stdin.once('data', function(data) {
 nome = data.toString().trim()
 console.log("Qual é sua idade?")

process.stdin.once('data', function(data) {
idade = parseInt(data.toString().trim())
console.log('Você já fez aniversário esse ano?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(nome, idade, resposta)
    process.exit()
    })
  })
 })
    function processamento(nome, idade, resposta) {
    anoNascimento = ano - idade
    if(resposta == 'sim') {
        fezaniversario = true
    } else  {
        fezaniversario = false
    } 

    if(fezaniversario) {
      console.log(`Voce nasceu em ${anoNascimento}`)
    } else  {
      console.log(`Voce nasceu em ${anoNascimento - 1}`)
    }
}
