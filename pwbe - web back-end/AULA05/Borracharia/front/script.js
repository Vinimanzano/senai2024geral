const form = document.querySelector('form');
const uri = 'http://localhost:3000';
const dados = [];

const tbody = document.querySelector('tbody');


// CRUD - CREATE
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        id: document.querySelector('#id').value,
        Name: document.querySelector('#name').value,
        descricao: document.querySelector('#descricao').value,
        valor: document.querySelector('#valor').value
    }

    fetch(uri,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    if (data.error) {
        sysmsg.classList.add('error');
        sysmsg.innerText = data.error;
        return;
    };
})
})

// CRUD - READ

function clientes(){
    fetch(uri)
    .then(response => responde.json())
    .then(data =>{
        dados.push(...data);
        render();
    })
}

function render() {
    tbody.innerHTML = '';

    if(dados.length === 0) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5">Nenhum registro encontrado</td>';
        tbody.appendChild(tr);
        sysmsg.classList.add('error');
        sysmsg.value = 'ERROR: 404 - Nenhum registro encontrado';
        return
    }

    dados.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>
                <button onclick="edit(this)">*</button>
                <button onclick="del(${item.id})">X</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function fornecedores(){
    fetch(uri)  
    .then(response => responde.json())
    .then(data =>{
        dados.push(...data);
        render();
    })
}

function render() {
    tbody.innerHTML = '';

    if(dados.length === 0) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5">Nenhum registro encontrado</td>';
        tbody.appendChild(tr);
        sysmsg.classList.add('error');
        sysmsg.value = 'ERROR: 404 - Nenhum registro encontrado';
        return
    }

    dados.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>${item.valor}</td>
            <td>
                <button onclick="edit(this)">*</button>
                <button onclick="del(${item.id})">X</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function produtos(){
    fetch(uri)
    .then(response => responde.json())
    .then(data =>{
        dados.push(...data);
        render();
    })
}

function produtos() {
    tbody.innerHTML = '';

    if(dados.length === 0) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5">Nenhum registro encontrado</td>';
        tbody.appendChild(tr);
        sysmsg.classList.add('error');
        sysmsg.value = 'ERROR: 404 - Nenhum registro encontrado';
        return
    }

    dados.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>${item.valor}</td>
            <td>
                <button onclick="edit(this)">*</button>
                <button onclick="del(${item.id})">X</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}