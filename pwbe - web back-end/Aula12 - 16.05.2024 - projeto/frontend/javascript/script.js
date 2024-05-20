function getCurrentYear() {
    return new Date().getFullYear();
}

function updateCopyright() {
    const year = getCurrentYear();
    const copyrightText = `Copyright © ${year} by Vinícius Manzano | All Rights Reserved.`;
    document.getElementById("copyright").innerHTML = copyrightText;
}

updateCopyright();

document.addEventListener("DOMContentLoaded", function() {
    // Carrega e exibe dados para cada seção
    loadAndDisplayData('destinos');
    loadAndDisplayData('hoteis');
    loadAndDisplayData('pontos_turisticos');
    loadAndDisplayData('telefones');

    // Event listener para adicionar destinos
    document.getElementById('formDestinos').addEventListener('submit', function(event) {
        event.preventDefault();
        const nomeDestino = document.getElementById('nomeDestino').value.trim();
        if (nomeDestino !== '') {
            adicionarItem('destinos', { nome: nomeDestino });
            document.getElementById('nomeDestino').value = ''; // Limpa o campo após adicionar
        }
    });

    // Event listener para adicionar hotéis
    document.getElementById('formHoteis').addEventListener('submit', function(event) {
        event.preventDefault();
        const nomeHotel = document.getElementById('nomeHotel').value.trim();
        if (nomeHotel !== '') {
            adicionarItem('hoteis', { nome: nomeHotel });
            document.getElementById('nomeHotel').value = ''; // Limpa o campo após adicionar
        }
    });

    // Event listener para adicionar pontos turísticos
    document.getElementById('formPontosTuristicos').addEventListener('submit', function(event) {
        event.preventDefault();
        const nomePontoTuristico = document.getElementById('nomePontoTuristico').value.trim();
        const enderecoPontoTuristico = document.getElementById('enderecoPontoTuristico').value.trim();
        const telefonePontoTuristico = document.getElementById('telefonePontoTuristico').value.trim();
        const valorPontoTuristico = document.getElementById('valorPontoTuristico').value.trim();
        if (nomePontoTuristico !== '' && enderecoPontoTuristico !== '' && telefonePontoTuristico !== '' && valorPontoTuristico !== '') {
            adicionarItem('pontos_turisticos', { 
                nome: nomePontoTuristico,
                endereco: enderecoPontoTuristico,
                telefone: telefonePontoTuristico,
                valor: valorPontoTuristico
            });
            document.getElementById('nomePontoTuristico').value = ''; // Limpa o campo após adicionar
            document.getElementById('enderecoPontoTuristico').value = '';
            document.getElementById('telefonePontoTuristico').value = '';
            document.getElementById('valorPontoTuristico').value = '';
        }
    });

    // Event listener para adicionar telefones
    document.getElementById('formTelefones').addEventListener('submit', function(event) {
        event.preventDefault();
        const numeroTelefone = document.getElementById('numeroTelefone').value.trim();
        if (numeroTelefone !== '') {
            adicionarItem('telefones', { numero: numeroTelefone });
            document.getElementById('numeroTelefone').value = ''; // Limpa o campo após adicionar
        }
    });
});

// Função para adicionar um novo item
async function adicionarItem(endpoint, novoItem) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoItem)
        });
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText} ao adicionar um novo item em ${endpoint}`);
        }
        // Aguarda a resposta ser convertida para JSON
        const responseData = await response.json();
        // Verifica se a resposta tem dados
        if (responseData) {
            // Atualiza a tabela após adicionar o item
            loadAndDisplayData(endpoint);
        } else {
            throw new Error(`Resposta vazia ao adicionar um novo item em ${endpoint}`);
        }
    } catch (error) {
        displayError('Erro ao adicionar um novo item:', error);
    }
}

// Função para carregar e exibir dados de uma seção específica
async function loadAndDisplayData(endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText} ao carregar dados de ${endpoint}`);
        }
        // Aguarda a resposta ser convertida para JSON
        const data = await response.json();
        // Exibe os dados na tabela correspondente
        displayData(endpoint, data);
    } catch (error) {
        displayError('Erro ao carregar e exibir dados:', error);
    }
}

// Função para exibir os dados na tabela correspondente à seção especificada
function displayData(endpoint, data) {
    const tableBody = document.getElementById(`${endpoint}TableBody`);
    if (!tableBody) {
        console.error(`Elemento ${endpoint}TableBody não encontrado.`);
        return;
    }
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.data}</td>
            <td>
                <button onclick="editarItemForm('${endpoint}', ${item.id}, '${item.nome}', )">Editar</button>
                <button onclick="excluirItem('${endpoint}', ${item.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para exibir mensagens de erro
function displayError(message, error) {
    console.error(`${message} ${error.message}`);
}

// Função para exibir o formulário de edição de item
function editarItemForm(endpoint, id, nome) {
    const novoNome = prompt("Digite o novo nome:", nome);
    if (novoNome !== null) {
        editarItem(endpoint, id, { nome: novoNome });
    }
}

// Função para editar um item existente
async function editarItem(endpoint, id, novoItem) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoItem)
        });
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText} ao editar o item com ID ${id} em ${endpoint}`);
        }
        // Atualiza a tabela após editar o item
        loadAndDisplayData(endpoint);
    } catch (error) {
        displayError('Erro ao editar o item:', error);
    }
}

// Função para excluir um item existente
async function excluirItem(endpoint, id) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText} ao excluir o item com ID ${id} em ${endpoint}`);
        }
        // Atualiza a tabela após excluir o item
        loadAndDisplayData(endpoint);
    } catch (error) {
        displayError('Erro ao excluir o item:', error);
    }
}

