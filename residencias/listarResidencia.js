let residencias = require('./residencias');

function listarResidencia() {
    if (residencias === 0) {
        throw new Error("Nada aqui")
    } else {
        residencias.forEach((residencias, index) => {
        console.log(`${index + 1}. endereco: ${residencias.endereco}, Bairro: ${residencias.Bairro}, Número: ${residencias.numero}, Proprietario: ${residencias.Proprietario} `)
      })
    }
}
module.exports = listarResidencia