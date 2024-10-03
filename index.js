// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
}

// Função para preencher o formulário com os dados da API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}

// Função para validar o formato do CEP
const cepValido = (cep) => /^[0-9]{8}$/.test(cep);

// Função para consumir a API via CEP
const pesquisarcep = async () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos

    limparFormulario();

    if (cepValido(cep)) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty('erro')) {
                alert('CEP não encontrado');
            } else {
                preencherFormulario(endereco);
            }
        } catch (error) {
            alert('Erro ao buscar o CEP, tente novamente.');
            console.error('Erro na requisição:', error);
        }
    } else {
        alert("CEP inválido! Verifique o formato (somente números).");
    }
}

// Adicionar o escutador para executar a pesquisa ao perder o foco no campo de CEP
document.getElementById('cep').addEventListener('focusout', pesquisarcep);