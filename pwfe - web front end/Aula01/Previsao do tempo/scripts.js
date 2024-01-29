const key = "1b274b6a8139a5eeae5571f298f7258e";

function buscarCidade(){


const Dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key`);
colocarDados();
    
}