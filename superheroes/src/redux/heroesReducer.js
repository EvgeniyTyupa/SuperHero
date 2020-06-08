import {heroApi} from '../api/api';

const SET_HEROES = "SET_HEROES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_HEROES_COUNT = "SET_TOTAL_HEROES_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TAKE_HERO = "TAKE_HERO";
const DELETE_HERO = "DELETE_HERO";
const SET_CURRENT_DOING = "SET_CURRENT_DOING";
const SAVE_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";
const ADD_HERO = "ADD_HERO";


let initialState = {
    heroes: [],
    pageSize: 5,
    totalHeroesCount: 0,
    currentPage: 1,
    isFetching: true,
    currentHero: 1,
    currentDoing: ""
}

const heroesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_HEROES:{
            return {...state, heroes: action.heroes}
        }
        case SET_TOTAL_HEROES_COUNT:{
            return {...state, totalHeroesCount: action.totalHeroesCount}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TAKE_HERO:{
            return {...state, currentHero: action.currentHero}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case DELETE_HERO:{
            return {
                ...state,
                heroes: state.heroes.map(h => {
                    if(h.id === action.heroId){
                        return h.id;
                    }
                })
            }
        }
        case SET_CURRENT_DOING:{
            return {...state, currentDoing: action.currentDoing}
        }
        default:
            return state;
    }
}


export const setHeroes = (heroes) => ({
    type: SET_HEROES, heroes
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});
export const setTotalHeroesCount = (totalHeroesCount) => ({
    type: SET_TOTAL_HEROES_COUNT, totalHeroesCount
});
export const setIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING, isFetching
});
export const setCurrentHero = (currentHero) => ({
    type: TAKE_HERO, currentHero
});
export const deleteHeroSucces = (heroId) =>({
    type: DELETE_HERO, heroId
})
export const deleteHero = (heroId) => {
    return(dispatch)=>{
        heroApi.deleteHero(heroId).then(data=>{
            dispatch(deleteHeroSucces(heroId));
        });
    }
    
}

export const setCurrentDoing = (currentDoing) => ({
    type: SET_CURRENT_DOING, currentDoing
});


export const getHeroesThunkCreator = (currentPage, pageSize) => {
    return(dispatch) => {
        dispatch(setIsFetching(true));

        heroApi.getHeroes(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setHeroes(data.heroes));
            dispatch(setTotalHeroesCount(data.totalHeroesCount));
            dispatch(setCurrentHero(data.heroes[1]));
        });
    }
}


export default heroesReducer;