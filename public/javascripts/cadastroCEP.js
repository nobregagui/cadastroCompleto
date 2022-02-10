const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('estado').value = endereco.uf
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/` 
    const dados = await fetch(url)
    const endereco = await dados.json()
    if (endereco.hasOwnProperty('erro')) {
        document.getElementById('estado').value = 'CEP não encontrado!'
    }else
    preencherFormulario(endereco)
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep)