
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let salário
exibirMenu()

function exibirMenu() {
	console.log(`
		Menu:
		1.Cadastrar funcionário
    	2.Listar todos os funcionários
    	3.Exibir funcionário com maior salário
		4.Remover funcionário
		5.Sair
    `)

	rl.question('Escolha uma opção: ', (funcionarios) => {
		switch (funcionarios) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
				remover()
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

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios() {
    if(funcionarios.length == 0){
	  console.log('Não há nem um funcionário cadastrado.')
	}else{
		console.log(funcionarios)
	}
	exibirMenu()
}

function exibirMaiorSalario() {
	salário = funcionarios[0]
	for(let i = 0; i < funcionarios.length; i++) {
		if(funcionarios[i].salario > salário.salario) {
		salário = funcionarios[i]

		}
	}
		console.log(salário)
		exibirMenu()
}
function remover() {
	if (funcionarios.length == 0) {
	console.log('Nada cadastrado.')
	exibirMenu()
	} else {
		console.log('Lista de elementos')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios.nome}`)
		})
		rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				funcionarios.splice(numero - 1, 1)
				console.log('Elemento removido com sucesso!')
				exibirMenu()
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}


