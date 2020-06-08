import React from 'react';
import classes from "./Form.module.css";

const ShowHero = (props) => {
    return (
            <div className={classes.showHero}>
                <img src={props.baseUrl + props.heroProfile.image}></img>
                <p>{props.heroProfile.nickname}</p>
                <p>{props.heroProfile.realname}</p>
                <p>{props.heroProfile.description}</p>
                <p>{props.heroProfile.superpower}</p>
                <p>{props.heroProfile.catch_phase}</p>
            </div>
    )

}
export default ShowHero;