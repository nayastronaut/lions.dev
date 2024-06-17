let somaPares = 0
let somaImpares = 0 
let totalPares = 0
let totalImpares = 0

for (let i = 0; i <= 999; i++) {
    if( i % 2 == 0){
        somaPares += i 
        totalPares ++
    } else {
         somaImpares += i
         totalImpares ++
    }
    
}
    console.log(`A soma de números é ${somaPares}`)
    console.log(`A soma de números é ${somaImpares}`)
    console.log(`O total dos números é ${totalPares}`)
    console.log(`O total dos números é ${totalImpares}`)
    console.log(`A média dos números ${somaPares/totalPares}`)
    console.log(`A média dos números ${somaImpares/totalImpares}`)
if(totalImpares > totalPares) {
    console.log(`O total de impares é maior que pares`)
} else if (totalPares<totalImpares){
    console.log(`O total de pares é menor que impares`)
} else {
     console.log(`O total de números pares e impares é igual`)
}
