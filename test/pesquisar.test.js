const { pesquisarPessoaPorCPF } = require('../src/pesquisar.js')
const { strictEqual } = require('node:assert')

describe('Nome da suite de testes', () =>{
    it('Ao informar o CPF do Ronaldo, teremos o seu nome, cpf', ()=>{
        //************lembrar de fazer o TRIPLE A**************
        //ARANGE
        const cpfPesquisado = '81628491234'
        const cpfEsperado = '81628491234'
        const nomeEsperado = 'Ronaldo'
        const primeiraFrutaEsperada = 'melancia'
        const segundaFrutaEsperada = 'banana'
        //ACT
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        //ASSERT
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })
    it('Ao informar um CPF que não existe, deve retornar "Pessoa não encontrada"', ()=>{
        //ARANGE
        const cpfPesquisado = '00000000000'
        //ACT
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)
        //ASSERT
        strictEqual(pessoa, 'Pessoa não encontrada')
    })
})