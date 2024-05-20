function getCurrentYear() {
    return new Date().getFullYear();
}

function updateCopyright() {
    var year = getCurrentYear();
    var copyrightText = "Copyright © " + year + " by Vinícius Manzano | All Rights Reserved.";
    document.getElementById("copyright").innerHTML = copyrightText;
}

window.onload = function() {
    updateCopyright();
};

//--------------------------------------------------------------------------------------------------------------

// Função para exibir formulário
function showForm(section) {
    console.log(`Adicionar item à seção: ${section}`);
    // Implemente a lógica para exibir o formulário correspondente à seção especificada
}

// Evento quando o DOM é carregado
document.addEventListener('DOMContentLoaded', () => {
    loadAndDisplayData('destinos');
    loadAndDisplayData('hoteis');
    loadAndDisplayData('pontos_turisticos');
    loadAndDisplayData('telefones');
});

// Função para carregar e exibir dados
async function loadAndDisplayData(endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        displayData(endpoint, data);
    } catch (error) {
        displayError('Erro ao carregar dados:', error);
    }
}

// Função para exibir os dados na tabela
function displayData(endpoint, data) {
    const tableBody = document.getElementById(`${endpoint}TableBody`);
    if (!tableBody) {
        console.error(`Elemento ${endpoint}TableBody não encontrado.`);
        return;
    }
    tableBody.innerHTML = '';
    if (endpoint === 'destinos') {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nome}</td>
            `;
            tableBody.appendChild(row);
        });
    } else if (endpoint === 'hoteis') {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.valor}</td>
                <td>${item.avaliacao}</td>
                <td>${item.email}</td>
                <td>${item.site}</td>
            `;
            tableBody.appendChild(row);
        });
    } else if (endpoint === 'pontos_turisticos') {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.endereco}</td>
                <td>${item.telefone}</td>
                <td>${item.valor}</td>
            `;
            tableBody.appendChild(row);
        });
    } else if (endpoint === 'telefones') {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.telefone}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Função para exibir erros
function displayError(message, error) {
    console.error(message, error);
    alert(`${message} ${error.message}`);
}
