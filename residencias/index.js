const prompt = require('prompt-sync')();
const adicionarResidencia = require('./adicionarResidencia')
const listarResidencia = require('./listarResidencia');
const atualizarResidencia = require('./atualizarResidencia');
const removerResidencia = require('./removerResidencia');


let residencias = require('./residencias');


function mainMenu() {
    console.log(`
    __________________________________
   |    -*-Bem-vindo ao Menu!-*-      |
   |                                  |
   | 1 - Adicionar Residencia         |
   | 2 - Listar Residencia            |
   | 3 - Atualizar Residencia         |
   | 4 - Remover Residencia           |
   | 5 - Sair                         |
   |__________________________________|
  
   `)

    const opcao = prompt('Escolha uma opção: ');
    let index;

    switch(opcao) {
        case '1': 
        adicionarResidencia();    
        var endereco = prompt("Informe o endereco: ")
        var bairro = prompt("Informe o nome da bairro: ")
        var numero = prompt("Informe o número da casa: ")
        var proprietario = prompt("Informe o proprietário da residência: ")
        adicionarResidencia({ endereco, bairro, numero, proprietario});
        console.log('Residência adicionado com sucesso!');
        mainMenu();
        break;

        case '2':
        listarResidencia();
        mainMenu();
        break

        case '3':
        listarResidencia();
        index = parseInt(prompt('Escolha a residencia para editar: ')) - 1;
        const novoendereco = prompt('Novo endereco: ');
        const novobairro = prompt('Nova bairro: ');
        const novonumero = prompt('Novo numero: ');
        const novoDono = prompt('Novo dono: ')
        atualizarResidencia(index, { endereco: novoendereco, rua:novobairro, numero: novonumero, dono: novoDono });
        console.log('Residencia atualizada com sucesso!');
        mainMenu();
        break;
        
        case '4':
        listarResidencia()
        index = parseInt(prompt('Número da residencia a deletar: ')) - 1;
        removerResidencia(index);
        console.log('Residencia deletada com sucesso!');
        exibirMenu();
        break;
        case '5':
        console.log('Até a pŕoxima!')
        break
        default:
        throw new Error("Opção inválida!")
      }
    
    }
    mainMenu()