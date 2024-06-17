let número 

console.log('Digite o numero aqui')
 process.stdin.once('data', function(data) {
 número = data.toString().trim()
 processamento(número)
 process.exit()
 })

 function processamento(número) {
   if (número == 0) {
    console.log("O número que voce digitou é zero.")
   } else if (número % 2 == 0) {
     console.log("O número que voce digitou é par.")
   } else {
     console.log("O número que voce digitou é impar.")
   }
}

   