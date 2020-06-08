import * as axios from 'axios';

const instance = axios.create({
    
    baseURL: "http://localhost:80/superheroes/back/server.php",
});

export const heroApi = {
    getHeroes(currentPage, pageSize){
        return instance.get(`?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    getHero(heroId){
        return instance.get(`?heroId=${heroId}`);
    },
    deleteHero(heroId){
        return instance.delete(`?heroId=${heroId}`)
        .then(response => response.data);
    },
}
