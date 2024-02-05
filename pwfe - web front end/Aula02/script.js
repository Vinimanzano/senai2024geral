function pesquisacep(cep) {
    // Verify if the browser supports the getJSON method
    if (!jQuery.getJSON) {
        alert("Seu navegador não suporta a função getJSON do jQuery.");
        return;
    }

    // Clear the form fields
    limpa_formulário_cep();

    // Validate the CEP
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
        // Display "..." while the request is being made
        document.getElementById('logradouro').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";
        document.getElementById('ibge').value = "...";

        // Make the request to the ViaCEP webservice
        jQuery.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
            if (!("erro" in dados)) {
                // If the request is successful, update the form fields with the response data
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('uf').value = dados.uf;
                document.getElementById('ibge').value = dados.ibge;
            } else {
                // If the request fails, display an error message
                limpa_formulário_cep();
                alert("CEP não encontrado.");
            }
        });
    }
}

function limpa_formulário_cep() {
    // Clear the form fields
    document.getElementById('cep').value = "";
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
}
