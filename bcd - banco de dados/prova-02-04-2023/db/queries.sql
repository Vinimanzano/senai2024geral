-- Crie uma consulta que liste os clientes em ordem alfabética de nome
SELECT * FROM clientes ORDER BY nome;

-- Crie uma consulta que liste todos os clientes e seus telefones
SELECT cli.nome, cli.cpf, telefones.telefone, telefones.telefone2 FROM clientes cli INNER JOIN telefones WHERE cli.id = telefones.cliente_id;

-- Crie uma consulta que liste todos os veículos em ordem crescente de marca e modelo
SELECT * FROM veiculos ORDER BY marca, modelo;

-- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pela diária decrescente
SELECT vei.placa, vei.modelo, vei.marca, res.diaria FROM veiculos vei INNER JOIN reservas res WHERE vei.marca = 'Fiat' ORDER BY res.diaria DESC;

-- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de aluguéis realizadas em cada uma
SELECT vei.placa, vei.modelo, vei.marca, COUNT(res.veiculo_placa) FROM veiculos vei INNER JOIN reservas res WHERE vei.placa = res.veiculo_placa GROUP BY vei.placa;

-- Crie um relatório que mostre todos os auguéis acrescidos do nome do cliente, modelo e marca do veículo, dias, subtotal e salve como uma visão chamada vw_todos_os_alugueis
CREATE VIEW vw_todos_os_alugueis AS SELECT r.res_id, c.nome AS nome_cliente, v.modelo, v.marca, r.dias, r.sub_total FROM Reservas r INNER JOIN Clientes c ON r.cliente = c.cpf INNER JOIN Veiculos v ON r.placa = v.placa;

