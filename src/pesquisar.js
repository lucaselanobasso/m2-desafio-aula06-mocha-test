function pesquisarPessoaPorCPF(cpf){
    const pessoas = [
        {
            nome: 'Julio',
            cpf: '12348197231',
            frutasFavoritas: ['maçã', 'abacaxi']
        },
        {
            nome: 'Isa',
            cpf: '11626439213',
            frutasFavoritas: ['pera', 'laranja']
        },
        {
            nome: 'Ronaldo',
            cpf: '81628491234',
            frutasFavoritas: ['melancia', 'banana']
        },
        {
            nome: 'Lucas',
            cpf: '32167856342',
            frutasFavoritas: ['uva', 'abacate']
        },
        {
            nome: 'Lisiane',
            cpf: '98127664214',
            frutasFavoritas: ['mamão', 'uva']
        },
        {
            nome: 'Pedro',
            cpf: '78125452315',
            frutasFavoritas: ['maçã', 'melão']
        },
    ]

    for (let i = 0; i < pessoas.length; i++){
        if(cpf == pessoas[i].cpf){
            return pessoas[i]
        }
        
    }
    return 'Pessoa não encontrada'
}




module.exports = {
    pesquisarPessoaPorCPF
}