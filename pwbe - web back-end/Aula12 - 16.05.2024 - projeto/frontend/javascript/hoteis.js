const uri = "http://localhost:3000/hoteis";
let hoteis = [];

function loadItens() {
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            // Limpa o array antes de adicionar os novos dados
            hoteis = data;
            console.log(hoteis);
            displayData('hoteis', hoteis);
        })
        .catch(error => {
            console.error('Erro ao carregar hotéis:', error);
        });
}

function displayData(elementId, data) {
    const tableBody = document.getElementById(`${elementId}TableBody`);
    if (!tableBody) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        console.error(`Elemento ${elementId}TableBody não encontrado.`);
        return;
    }
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.valor}</td>
            <td>${item.avaliacao}</td>
            <td>${item.email}</td>
            <td>${item.site}</td>
            <td>${item.id_destino}</td>
            <td>
                <button onclick="editarItemForm(${item.id})">Editar</button>
                <button onclick="excluirItem(${item.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function adicionarHotelForm() {
    const nome = document.getElementById("nomeHotel").value;
    const valor = document.getElementById("valorHotel").value;
    const avaliacao = parseFloat(document.getElementById("AvaliacaoHotel").value);
    const email = document.getElementById("emailHotel").value;
    const site = document.getElementById("siteHotel").value;
    const id_destino = document.getElementById("id_destino").value;

    const novoHotel = { nome, valor, avaliacao, email, site, id_destino };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoHotel)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao adicionar hotel.');
            }
            return response.json();
        })
        .then(responseData => {
            // Adicionar o novo hotel ao array hoteis
            hoteis.push(responseData);
            // Exibir os dados atualizados
            displayData('hoteis', hoteis);
        })
        .catch(error => {
            console.error('Erro ao adicionar hotel:', error);
        });
}

function editarItemForm(id) {
    const hotel = hoteis.find(hotel => hotel.id === id);
    if (!hotel) {
        console.error('Hotel não encontrado.');
        return;
    }
    const novoNome = prompt("Digite o novo nome:", hotel.nome);
    const novoValor = prompt("Digite o novo valor:", hotel.valor);
    const novaAvaliacao = prompt("Digite a nova avaliação:", hotel.avaliacao);
    const novoEmail = prompt("Digite o novo email:", hotel.email);
    const novoSite = prompt("Digite o novo site:", hotel.site);
    const novoIdDestino = prompt("Digite o novo ID do destino:", hotel.id_destino);
    if (
        novoNome !== null &&
        novoValor !== null &&
        novaAvaliacao !== null &&
        novoEmail !== null &&
        novoSite !== null &&
        novoIdDestino !== null
    ) {
        const novoItem = { nome: novoNome, valor: novoValor, avaliacao: novaAvaliacao, email: novoEmail, site: novoSite, id_destino: novoIdDestino };
        editarItem(id, novoItem);
    }
}

function editarItem(id, novoItem) {
    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoItem)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText} ao editar o hotel com ID ${id}`);
            }
            loadItens();
        })
        .catch(error => {
            console.error('Erro ao editar hotel:', error);
        });
}

function excluirItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText} ao excluir o hotel com ID ${id}`);
            }
            loadItens();
        })
        .catch(error => {
            console.error('Erro ao excluir hotel:', error);
        });
}

document.getElementById('formHoteis').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarHotelForm();
});

loadItens();
