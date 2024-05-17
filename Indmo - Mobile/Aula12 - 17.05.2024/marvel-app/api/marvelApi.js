import axios from 'axios';
import md5 from 'md5';

const publicKey = '1775710a9dda6063519fe778dcc9e971';
const privateKey = '7f8826350f434f64a96a756a320fc660616480f9';
const data = new Date().getDate();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        data,
        apikey: publicKey,
        hash
    }
});

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const responde = await api.get('/charactersList', {
            params: {
                offset,
                limit,
            }
        });
        return responde.data.results;
    } catch (error){
        console.error(error);
        return[];
    }
};