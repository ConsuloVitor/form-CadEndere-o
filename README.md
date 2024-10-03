<h1 align="center">Cadastro De Endereço</h1>


![image](https://github.com/user-attachments/assets/e0d2dfd6-0cee-4b7c-82d6-69382975f5aa)

<h2 align="center"> Esse site cria um formulário para o cadastro de endereço</h2>

<h1 align="center"> Funcionalidades</h1>

**1. Função Limpar Formulário**
> A função limparFormulario é usada para limpar (ou resetar) os campos específicos do formulário de endereço. Ela define os valores dos campos de texto como strings vazias, removendo o que quer que tenha sido digitado ou preenchido automaticamente antes. Vamos detalhar.
```
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
}
```

**2. Função Preencher Formulário**
>A função preencherFormulario recebe um objeto endereco e usa os dados desse objeto para preencher os campos do formulário com "logradouro" (rua), "localidade" (cidade), "bairro" e "uf" (estado). Cada campo recebe o valor correspondente do objeto endereco.
```
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}
```

**3. Função Preencher Formulário**
>A função cepValido verifica se o CEP tem exatamente 8 dígitos numéricos. Ela usa uma expressão regular e retorna true se o CEP for válido, ou false se não for.
```
const cepValido = (cep) => /^[0-9]{8}$/.test(cep);
```

**4. Função Preencher Formulário**
>A função pesquisarcep busca o endereço com base no CEP digitado, limpando o formulário antes. Se o CEP for válido, ela faz uma requisição à API ViaCEP e, se encontrar o endereço, preenche o formulário. Caso contrário, ou se houver um erro na busca, exibe um alerta para o usuário.
```
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
```

**5. Função Que Perde o foco busca altomaticamente**
>A linha document.getElementById('cep').addEventListener('focusout', pesquisarcep); adiciona um evento ao campo de CEP que chama a função pesquisarcep quando o usuário sai do campo (perde o foco). Isso faz com que o endereço seja buscado automaticamente ao terminar de digitar o CEP.
```
document.getElementById('cep').addEventListener('focusout', pesquisarcep);
```


<h1 align="center">:rocket: Tecnologias</h1>
<p align="center">
<img align="" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img align="" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img align="" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img align="" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img align="" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white ">
</p><p align="center">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/OneDrive-0078D4.svg?style=for-the-badge&logo=microsoftonedrive&logoColor=white">
<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
</p>  

<h1 align="center">Como Utilizar</h1>

**• Abra a página HTML em um navegador.**

**• Digite um CEP válido no campo correspondente.**

**• Ao sair do campo (clicar fora), o endereço deve ser preenchido automaticamente nos campos "Rua", "Bairro", "Cidade" e "Estado".**

**• Se você inserir um CEP inválido ou se a API não retornar dados, você verá um alerta com a mensagem apropriada.**







