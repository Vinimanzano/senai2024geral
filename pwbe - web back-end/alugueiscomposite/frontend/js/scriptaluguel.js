const uri = 'http://localhost:3000/alugueis';
var tbody = document.getElementById('data-table');
var sysMsg = document.getElementById('sys-msg');
var itens = [];

// CRUD - CREATE
function create() {
    const data = {
        id: form.id.value,
        placa: form.placa.value,
        cpf: form.cpf.value,
        reserva: form.reserva.value,
        retirada: form.retirada.value,
        devolução: form.devolução.value,
        subtotal: form.subtotal.value,
        status: form.status.value
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            sysMsg.classList.add('error');
            sysMsg.textContent = res.error;
            setTimeout(() => {
                sysMsg.classList.remove('error')
                sysMsg.textContent = '';
            }, 4000)
        } else {
            sysMsg.textContent = 'Carro Alugado!'; 

            setTimeout(() => {
                sysMsg.textContent = '';
            }, 4000)

            itens.push(res);
            renderData();
            form.reset();
        }
    });
}

// CRUD - READ
function loadItem() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            itens = res;
            renderData();
        })
}

// CRUD - UPDATE
function update(id, newData) {
    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            sysMsg.classList.add('error');
            sysMsg.textContent = res.error;
            setTimeout(() => {
                sysMsg.classList.remove('error')
                sysMsg.textContent = '';
            }, 4000)
        } else {
            sysMsg.textContent = 'Carro atualizado!'; 

            setTimeout(() => {
                sysMsg.textContent = '';
            }, 4000)

            // Atualiza os dados localmente
            const index = itens.findIndex(item => item.id === id);
            if (index !== -1) {
                itens[index] = newData;
            }
            renderData();
        }
    });
}

// CRUD - DELETE
function del(id) {
    if(confirm("Deseja realmente excluir este carro?")) {
        fetch(`${uri}/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                sysMsg.classList.add('error');
                sysMsg.textContent = res.error;
                setTimeout(() => {
                    sysMsg.classList.remove('error')
                    sysMsg.textContent = '';
                }, 4000)
            } else {
                sysMsg.textContent = 'Carro excluído!'; 

                setTimeout(() => {
                    sysMsg.textContent = '';
                }, 4000)

                // Remove o item localmente
                itens = itens.filter(item => item.id !== id);
                renderData();
            }
        });
    }
}

function renderData() {
    tbody.innerHTML = '';
    itens.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.placa}</td>
                <td>${item.cpf}</td>
                <td>${new Date(item.reserva).toLocaleDateString()}</td>
                <td>${new Date(item.retirada).toLocaleDateString()}</td>
                <td>${new Date(item.devolucao).toLocaleDateString()}</td>
                <td>${item.subtotal}</td>
                <td>${item.status}</td>
                <td>
                </td>
            </tr>
        `;
    });
}

window.onload = loadItem;
