import { createStore } from 'vuex'
import { getBreedsList, getRandomDogs, getDogsFromBreeds } from '@/api/api.js';


export const store = createStore({
    state: {
        breedsList: [],
        favoritesList: [],
        dogsList: [],
    },
    getters: {
        BREEDS_LIST: state => state.breedsList,
        FAVORITES_LIST: state => state.favoritesList,
        DOGS_LIST: state => state.dogsList,
    },
    mutations: {
        SET_BREEDS_LIST: (state, payload) => {
            state.breedsList = payload;
        },
        SET_FAVORITES_LIST: (state, payload) => {
            state.favoritesList = payload;
        },
        SET_DOGS_LIST: (state, payload) => {
            state.dogsList.push(...payload);
        },
        UPDATE_DOGS_LIST: (state, payload) => {
            state.dogsList = payload;
        },
        CLEAR_DOGS_LIST: (state) => {
            state.dogsList = [];
        }
    },
    actions: {
        ADD_FAVORITES_ITEM: (contex, payload) => {
            let favoritesList = localStorage.getItem('myBreedFavoritesList');
            if(favoritesList){
                favoritesList = JSON.parse(favoritesList);
                favoritesList.push(payload);
            }else{
                favoritesList = [payload];
            }
            localStorage.setItem('myBreedFavoritesList', JSON.stringify(favoritesList));
            contex.commit('SET_FAVORITES_LIST', favoritesList);
        },
        REMOVE_ITEM_FROM_FAVORITE_LIST: (contex, payload) => {
            let favoritesList = localStorage.getItem('myBreedFavoritesList');
            if(favoritesList){
                favoritesList = JSON.parse(favoritesList);
                favoritesList = favoritesList.filter(item => item.imgSrc !== payload.imgSrc);
            }else{
                favoritesList = [payload];
            }
            localStorage.setItem('myBreedFavoritesList', JSON.stringify(favoritesList));
            contex.commit('SET_FAVORITES_LIST', favoritesList);
        },
        GET_FAVORITES_LIST: (contex) => {
            let favoritesList = localStorage.getItem('myBreedFavoritesList');
            if(favoritesList){
                favoritesList = JSON.parse(favoritesList);
                contex.commit('SET_FAVORITES_LIST', favoritesList);
            } 
        },
        GET_BREEDS_LIST: async (contex) => {
            await getBreedsList().then((data) => {
                if(data.status === 'success'){
                    let formatedData = Object.entries(data.message).reduce((previousValue, currentValue)=>{
                        if(currentValue[1].length){
                            let subBreedsList = [];
                            currentValue[1].forEach((subBreed)=>{
                                subBreedsList.push(currentValue[0]+ '-' + subBreed);
                            });
                            previousValue.push(...subBreedsList);
                            return previousValue;
                        }else{
                            previousValue.push(currentValue[0]);
                            return previousValue;
                        }
                    },[]);
                    contex.commit('SET_BREEDS_LIST', formatedData);
                }
            });
        },
        GET_RANDOM_DOGS_LIST: async (contex) => {
            return await getRandomDogs().then((data) =>{
                if(data.status === 'success'){
                    let formatedData = data.message.map(item => {
                        let title = item.slice(item.indexOf('breeds/') + 7).split('/')[0];
                        title = title[0].toUpperCase() + title.slice(1);
                        return {
                            imgSrc: item,
                            title,
                            ImgAlt: title,
                        }
                    })
                    contex.commit('SET_DOGS_LIST', formatedData);
                }
            });
        },
        GET_DOGS_FROM_BREED: async (contex, payload) => {
            return await getDogsFromBreeds(payload).then((data) =>{
                if(data.status === 'success'){
                    let formatedData = data.message.map(item => {
                        let title = item.slice(item.indexOf('breeds/') + 7).split('/')[0];
                        title = title[0].toUpperCase() + title.slice(1);
                        return {
                            imgSrc: item,
                            title,
                            ImgAlt: title,
                        }
                    })
                    contex.commit('UPDATE_DOGS_LIST', formatedData);
                }
            });
        },
        CLEAR_DOGS_LIST: (contex) => {
            contex.commit('CLEAR_DOGS_LIST');
        }
    },
});