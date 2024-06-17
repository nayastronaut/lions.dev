const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let pintura = []
exibirMenu()

    function exibirMenu() {
        console.log(`
        Menu:
        1. Cadastrar pintura
        2. Listar pintura
        3. Editar pintura
        4. Remover pintura
        5. Sair
    `)

        rl.question('Escolha uma opção: ', (pintura) => {
            switch (pintura) {
                case '1':
                    cadastrarpintura()
                    break
                case '2':
                    listarpintura()
                    break
                case '3':
                    editarpintura()
                    break
                case '4':
                    removerpintura()
                    break
                case '5':
                    rl.close()
                    break
                default:
                    console.log('Opção inválida, tente novamente.')
                    exibirMenu()
                    break
    
                }
            })
    }

    function cadastrarpintura() {
        rl.question('Digite o nome da pintura: ', (nome) => {
        rl.question('Digite o autor da pintura: ', (autor) => {
        rl.question('Ano da pintura: ', (ano) => {
            pintura.push({ 
            nome:nome , 
            autor:autor , 
            ano: parseFloat (ano) 
        })
            console.log('Pintura cadastrada com sucesso!')
            exibirMenu()
        })
    })
    })
    }

    function listarpintura() {
        if(pintura.length == 0){
            console.log('Não há nenhuma pintura cadastrada.')
        }else{
            console.log(pintura)
        }
        exibirMenu()
        }
    
    function editarpintura() {
        if(pintura.lenght == 0) {
            console.log('Nada cadastrado.')
        }else{
            console.log('Editar pintura')
            pintura.forEach((pintura, index) => {
                console.log(`${index + 1}. ${pintura.nome}`)
            })
            rl.question('Edite a nova pintura aqui: ', (pintura) => {
                rl.question('Digite o nome da pintura: ', (nome) => {
                    rl.question('Digite o autor da pintura: ', (autor) => {
                    rl.question('Ano da pintura: ', (ano) => {
                        pintura.push({ 
                        pintura:pintura,
                        nome:nome , 
                        autor:autor , 
                        ano: parseFloat (ano) 
                        })
                        })
                    })
                    })
                
                        console.log('Pintura cadastrada com sucesso!')
                        exibirMenu()
                    })
                }
                

        }
    
    function removerpintura() {
        if (pintura.length == 0) {
        console.log('Nada cadastrado.')
        exibirMenu()
        } else {
            console.log('Lista de elementos')
            pintura.forEach((pintura, index) => {
                console.log(`${index + 1}. ${pintura.nome}`)
            })
            rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
                if (numero > 0 && numero <= pintura.length) {
                    pintura.splice(numero - 1, 1)
                    console.log('Elemento removido com sucesso!')
                    exibirMenu()
                } else {
                    console.log('Número inválido, tente novamente.')
                    exibirMenu()
                }
            })
        }
    }