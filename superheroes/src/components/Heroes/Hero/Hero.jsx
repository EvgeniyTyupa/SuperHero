import React from 'react';
import classes from './Hero.module.css';
import userPhotoDefault from '../../../assets/user.png';
import axios from 'axios';

const Hero = (props) => {

    function refreshPage() {
        window.location.reload(false);
    }

    let deleteHero = (id) =>{
        axios.delete(`http://localhost:80/superheroes/back/server.php?deleteHeroById=${id}`)
        .then(response=>{console.log(response)})
        .then(refreshPage());
    }
    return (
        <div key={props.id} className={classes.hero} >
            <div className={classes.heroUI} onClick={() => props.showHero(props.id, "Show")}>
                <img src={props.photo != null ? props.baseUrl + props.photo : userPhotoDefault}></img>
                <p>{props.nickname}</p>
            </div>
            <div className={classes.panel}>
                <span onClick={() => props.showHero(props.id, "Edit")}>Edit</span>
                <span onClick={() => deleteHero(props.id)}>Delete</span>
            </div>
        </div>
    );
}

export default Hero;