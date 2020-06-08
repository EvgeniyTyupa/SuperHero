import React from 'react';
import classes from './Heroes.module.css';
import { NavLink, Link } from 'react-router-dom';

import Hero from './Hero/Hero';
import ShowHero from '../Form/FormContainer';
import AddForm from '../Form/AddForm';
import EditForm from '../Form/EditForm';







const Heroes = (props) => {

    let pagesCount = Math.ceil(props.totalHeroesCount / props.pageSize);

    let baseUrl = "http://localhost:80/superheroes/";

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let heroProfile = {}

    let heroes = props.heroes.map((hero, index) => {
        return <Hero id={hero.id}
            photo={hero.images}
            nickname={hero.nickname}
            realname={hero.real_name}
            description={hero.origin_description}
            superpower={hero.superpowers}
            catch_phase={hero.catch_phase}
            showHero={props.showHero} 
            baseUrl={baseUrl}
            deleteHero={props.deleteHero}
            currentDoing={props.currentDoing}/>
    });

    heroes.map(hero => {
        if (hero.props.id == props.currentHero){
            console.log(hero);
            heroProfile = {
                id: hero.props.id,
                nickname: hero.props.nickname,
                realname: hero.props.realname,
                description: hero.props.description,
                superpower: hero.props.superpower,
                catch_phase: hero.props.catch_phase,
                image: hero.props.photo,
                currentDoing: hero.props.currentDoing
            } 
            return heroProfile;
        }
    });
    
    
    return (
        <div className={classes.UI}>
            <div className={classes.heroes}>
                <div className={classes.hero}>
                    {
                        heroProfile.currentDoing === "Add" ? <AddForm/>
                        : heroProfile.currentDoing === "Edit" ? <EditForm heroProfile={heroProfile} baseUrl={baseUrl}/>
                        : heroProfile.currentDoing === "Show" ? <ShowHero heroProfile={heroProfile} baseUrl={baseUrl} savePhoto={props.savePhoto} addHero={props.addHero}/> 
                        : <AddForm/>
                    }
                    
                </div>
            </div>
            <div className={classes.heroes}>
                <div className={classes.heroContainer}>
                    <div className={classes.panel}>
                        <p>Total Heroes: {props.totalHeroesCount}</p>
                        <button onClick={() => props.setCurrentDoing("Add")}>+ Hero</button>
                    </div>
                    
                    {heroes}
                </div>
                
                <div className={classes.pagination}>
                    <span onClick={props.prevPage}>←</span>
                    {
                        pages.map(p => {
                            if (p > props.min && p < props.max) {
                                return <span className={props.currentPage === p & classes.selectedPage}
                                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
                            }
                        })
                    }
                    <span onClick={props.nextPage}>→</span>
                </div> 
                

            </div>
        </div>

    );
}

export default Heroes;