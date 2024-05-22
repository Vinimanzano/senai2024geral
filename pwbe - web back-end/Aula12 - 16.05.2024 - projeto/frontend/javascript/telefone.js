const uri = "http://localhost:3000/telefones";
let itens = [];

function loadItens() {
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            itens = data;
            console.log(itens);
            displayData('telefones', itens);
        })
        .catch(error => {
            console.error('Erro ao carregar itens:', error);
        });
}

function displayData(telefones, data) {
    const tableBody = document.getElementById(`${telefones}TableBody`);
    if (!tableBody) {
        console.error(`Elemento ${telefones}TableBody não encontrado.`);
        return;
    }
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.telefone}</td>
            <td>${item.id_hotel}</td>
            <td>
                <button onclick="editarItemForm('${telefones}', ${item.id}, '${item.telefone}', ${item.id_hotel})">Editar</button>
                <button onclick="excluirItem(${item.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editarItem(telefones, id, novoItem) {
    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoItem)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao editar item.');
        }
        loadAndDisplayData();
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function excluirItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao excluir item.');
        }
        loadAndDisplayData();
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function editarItemForm(telefones, id, telefone, id_hotel) {
    const novoTelefone = prompt("Digite o novo telefone:", telefone);
    const novoIdHotel = prompt("Digite o novo id do hotel:", id_hotel);
    if (novoTelefone !== null && novoIdHotel !== null) {
        const novoItem = { telefone: novoTelefone, id_hotel: novoIdHotel };
        editarItem(telefones, id, novoItem);
    }
}

loadItens();