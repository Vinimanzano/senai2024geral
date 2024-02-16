//Variáveis e constantes(objetos) globais
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const uri = "http://localhost:3000/item";
let item = [];

//Obter dados do back-end
function loaditem() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            item = res;
            preencherTabela();
        });
}

//CRUD - Read - Renderizar os dados obtidos em uma tabela
function preencherTabela() {
    dados.innerHTML = "";
    item.forEach(cli => {
        dados.innerHTML += `
                <tr>
                    <td>${cli.id}</td>
                    <td>${cli.nome}</td>
                    <td>${cli.descricao}</td>
                    <td>${cli.valor}</td>
                <td>
                        <button onclick="del(${cli.id})"> - </button>
                        <button onclick="edit(this)"> * </button>
                </td>
                </tr>
            `;
    });
}

//CRUD - Create
criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        id: criar.id.value,
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                item.push(res);
                dados.innerHTML = "";
                preencherTabela();
            }
        });
});

//CRUD - Update
function update(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML,
    };
    fetch(uri + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                celulas[3].removeAttribute('contenteditable');
                btn.innerHTML = '*';
                btn.setAttribute('onclick', 'edit(this)');
            } else {
                mensagens(res.sqlMessage, 'Erro ao atualizar cliente!');
            }
        });
}

//CRUD - Delete
function del(id) {
    mensagens('Deseja realmente excluir o cliente id = ' + id + '?', 'Excluir cliente', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

//Tornar as células da linha tabela editáveis
// function edit(btn) {
//     let linha = btn.parentNode.parentNode;
//     let celulas = linha.cells;
//     for (let i = 1; i < celulas.length - 2; i++) {
//         celulas[i].setAttribute('contenteditable', 'true');
//     }
//     btn.innerHTML = '✔';
//     btn.setAttribute('onclick', 'update(this)');
// }