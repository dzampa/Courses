import axios from 'axios'

class Api{
    static async getUserinfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err){
            console.warn('Erro na API');
        };
    };
};

Api.getUserinfo('cbuosi');