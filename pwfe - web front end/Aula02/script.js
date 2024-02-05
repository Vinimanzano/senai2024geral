function pesquisacep(cep) {
    if (!jQuery.getJSON) {
        alert("Seu navegador não suporta a função getJSON do jQuery.");
        return;
    }

    limpa_formulário_cep();

    cep = cep.replace(/\D/g, '');
    if (cep != "") {
        document.getElementById('logradouro').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";
        document.getElementById('ibge').value = "...";

        jQuery.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
            if (!("erro" in dados)) {
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('uf').value = dados.uf;
                document.getElementById('ibge').value = dados.ibge;
            } else {
                limpa_formulário_cep();
                alert("CEP não encontrado.");
            }
        });
    }
}

function limpa_formulário_cep() {
    document.getElementById('cep').value = "";
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
}

