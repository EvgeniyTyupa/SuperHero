import React from 'react';
import preloader from '../../assets/preloader.svg';
import classes from './Preloader.module.css';

const Preloader = (props) => {
    return(
        <div>
            <img src={preloader} className={classes.preloader}/>
        </div>
    );
}

export default Preloader;