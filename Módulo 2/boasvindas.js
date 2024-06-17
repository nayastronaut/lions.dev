var nome = ''
console.log('coloque seu nome?')
 process.stdin.on('data', function(data) {
 nome = data.toString()
var saudacao = ('Olá,') + nome
console.log(saudacao)
process.exit()
 })