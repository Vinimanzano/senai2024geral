const uri = "http://localhost:3000/pontos_turisticos";
const itens = [];

function loadItens() {
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            // Limpa o array antes de adicionar os novos dados
            itens.length = 0;
            itens.push(...data);
            console.log(itens);
            displayData('pontos_turisticos', itens);
        })
        .catch(error => {
            console.error('Erro ao carregar itens:', error);
        });
}

function displayData(pontos_turisticos, data) {
    const tableBody = document.getElementById(`${pontos_turisticos}TableBody`);
    if (!tableBody) {
        console.error(`Elemento ${pontos_turisticos}TableBody não encontrado.`);
        return;
    }
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>${item.localizacao}</td>
            <td>${formatarData(item.data)}</td> <!-- Formatando a data -->
            <td>
                <button onclick="editarItemForm('${pontos_turisticos}', ${item.id}, '${item.nome}')">Editar</button>
                <button onclick="excluirItem(${item.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function formatarData(data) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Os meses são indexados de 0 a 11
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function adicionarItemForm(pontos_turisticos) {
    const nome = document.getElementById(`${pontos_turisticos}Nome`).value;
    const descricao = document.getElementById(`${pontos_turisticos}Descricao`).value;
    const localizacao = document.getElementById(`${pontos_turisticos}Localizacao`).value;
    const data = document.getElementById(`${pontos_turisticos}Data`).value;
    if (!nome || !descricao || !localizacao || !data) {
        console.error('Por favor, preencha todos os campos.');
        return;
    }
    const novoItem = { nome, descricao, localizacao, data };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoItem)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao adicionar item.');
            }
            return response.json();
        })
        .then(responseData => {
            itens.push(responseData);
            displayData(pontos_turisticos, itens);
        })
        .catch(error => {
            console.error('Erro ao adicionar item:', error);
        });
}

function editarItemForm(pontos_turisticos, id, nome) {
    const novoNome = prompt("Digite o novo nome:", nome);
    if (novoNome !== null) {
        editarItem(pontos_turisticos, id, { nome: novoNome });
    }
}

function editarItem(pontos_turisticos, id, novoItem) {
    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoItem)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText} ao editar o item com ID ${id} em ${pontos_turisticos}`);
            }
            loadItens();
        })
        .catch(error => {
            console.error('Erro ao editar item:', error);
        });
}

function excluirItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText} ao excluir o item com ID ${id}`);
            }
            loadItens();
        })
        .catch(error => {
            console.error('Erro ao excluir item:', error);
        });
}

loadItens();
