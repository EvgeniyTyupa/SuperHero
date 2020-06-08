import React from 'react';
import { connect } from 'react-redux';
import {setCurrentPage, deleteHero, setCurrentDoing, setTotalHeroesCount, setIsFetching, setCurrentHero, getHeroesThunkCreator} from '../../redux/heroesReducer';
import Heroes from './Heroes';
import Preloader from '../Preloader/Preloader';


class HeroesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            min: 0,
            max: 5
        }
    }
    componentDidMount(){
        this.props.getHeroesThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getHeroesThunkCreator(this.props.currentPage, this.props.pageSize);
        console.log(pageNumber);
    }
    prevPage = () => {
        if(this.state.min >= 1){
            this.state.min--;
            this.state.max-=5;
            let pageNumber = this.props.currentPage;
            pageNumber -= 1;
            console.log(pageNumber);
            this.props.setCurrentPage(pageNumber);
            this.props.getHeroesThunkCreator(pageNumber, this.props.pageSize);
        }
    }
    nextPage = () => {
        if(this.state.max < this.props.totalHeroesCount){
            this.state.min++;
            this.state.max+= 5;
            let pageNumber = this.props.currentPage;
            pageNumber += 1;
            console.log(pageNumber);
            console.log(this.state.max + " " + this.props.totalHeroesCount);
            this.props.setCurrentPage(pageNumber);
            this.props.getHeroesThunkCreator(pageNumber, this.props.pageSize);
        }
    }
    showHero = (currentHero, currentDoing) =>{
        this.props.setCurrentHero(currentHero);
        this.props.setCurrentDoing(currentDoing);
    }
    deleteHero = (heroId) =>{
        this.props.deleteHero(heroId);
    }
    setCurrentDoing=(currentDoing)=>{
        this.props.setCurrentDoing(currentDoing);
    }
    render(){
        return(
            <>
                {this.props.isFetching ? <Preloader/>:
                <Heroes totalHeroesCount={this.props.totalHeroesCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        heroes={this.props.heroes}
                        min={this.state.min}
                        max={this.state.max}
                        showHero={this.showHero}
                        currentHero={this.props.currentHero}
                        deleteHero={this.deleteHero}
                        currentDoing={this.props.currentDoing}
                        setCurrentDoing={this.setCurrentDoing}
                        />
                }
            </>
        );
    }
}



let mapStateToProps = (state) => {
    return{
        heroes: state.heroesReducer.heroes,
        pageSize: state.heroesReducer.pageSize,
        totalHeroesCount: state.heroesReducer.totalHeroesCount,
        currentPage: state.heroesReducer.currentPage,
        isFetching: state.heroesReducer.isFetching,
        currentHero: state.heroesReducer.currentHero,
        currentDoing: state.heroesReducer.currentDoing
    }
}

export default connect(mapStateToProps,{
    setCurrentPage,
    setTotalHeroesCount,
    setIsFetching,
    getHeroesThunkCreator,
    setCurrentHero,
    deleteHero,
    setCurrentDoing,
})(HeroesContainer);