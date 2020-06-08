import { Field, reduxForm } from "redux-form";
import React from 'react';
import classes from "./Form.module.css";
import { connect } from "react-redux";
import addHero from "../../redux/heroesReducer";


const AddForm = (props) => {
    const onPhotoUpload = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <h2>Add new Hero</h2>
            <div className={classes.formBlock}>
                <div className={classes.field}>
                    <label>Name: </label>
                    <Field placeholder="Name" name={"nickname"} type="text" component={"input"}/>
                </div>
                <div className={classes.field}>
                    <label>Real name: </label>
                    <Field placeholder="Real name" name={"realname"} component={"input"} />
                </div>
                <div className={classes.field}>
                    <label>Description: </label>
                    <Field placeholder="Description" name={"description"} component={"textarea"} />
                </div>
                <div className={classes.field}>
                    <label>Superpower: </label>
                    <Field placeholder="Superpower" name={"superpower"} component={"textarea"} />
                </div>
                <div className={classes.field}>
                    <label>Catch phrase: </label>
                    <Field placeholder="Catch phrase" name={"catch_phase"} component={"textarea"} />
                </div>
                <input type="file" onChange={onPhotoUpload}></input>
                <input type="submit" value="Save"></input>
            </div>
        </form>
    )
}
const EditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <h2>Edit Hero</h2>
            <div className={classes.formBlock}>
                <img src={props.baseUrl + props.heroProfile.image}></img>
                <div className={classes.field}>
                    <label>Name: </label>
                    <Field placeholder="Name" name={"nickname"} type="text" value={props.heroProfile.nickname} component={"input"} />
                </div>
                <div className={classes.field}>
                    <label>Real name: </label>
                    <Field placeholder="Real name" name={"realname"} value={props.heroProfile.realname} component={"input"} />
                </div>
                <div className={classes.field}>
                    <label>Description: </label>
                    <Field placeholder="Description" name={"description"} value={props.heroProfile.description} component={"textarea"} />
                </div>
                <div className={classes.field}>
                    <label>Superpower: </label>
                    <Field placeholder="Superpower" name={"superpower"} value={props.heroProfile.superpower} component={"textarea"} />
                </div>
                <div className={classes.field}>
                    <label>Catch phrase: </label>
                    <Field placeholder="Catch phrase" name={"catch_phase"} value={props.heroProfile.catch_phase} component={"textarea"} />
                </div>
                <input type="submit" value="Save"></input>
            </div>
        </form>
    )

}





const HeroForm = (props) => {
    const AddReduxForm = reduxForm({form: 'addForm'})(AddForm);
    const EditReduxForm = reduxForm({form: 'editForm'})(EditForm);
    return (
        <>
            {props.heroProfile.image ?
                <div>
                    {
                        props.heroProfile.currentDoing === "Show" ?
                            <div className={classes.showHero}>
                                <img src={props.baseUrl + props.heroProfile.image}></img>
                                <p>{props.heroProfile.nickname}</p>
                                <p>{props.heroProfile.realname}</p>
                                <p>{props.heroProfile.description}</p>
                                <p>{props.heroProfile.superpower}</p>
                                <p>{props.heroProfile.catch_phase}</p>
                            </div>
                            : props.heroProfile.currentDoing === "Add" ?
                                <AddReduxForm heroProfile={props.heroProfile} savePhoto={props.savePhoto} onSubmit={props.onSubmit} addHero={props.addHero}/>
                                :
                                <EditReduxForm heroProfile={props.heroProfile} baseUrl={props.baseUrl} onSubmit={props.onSubmit}/>
                    }
                </div>
                : <AddReduxForm heroProfile={props.heroProfile} savePhoto={props.savePhoto}onSubmit={props.onSubmit} addHero={props.addHero} />
            }
        </>
    )

}

const HeroReduxForm = reduxForm({ form: 'heroForm' })(HeroForm);
const Form = (props) => {
    const onSubmit = (formData) => {
        props.addHero(formData.nickname, formData.realname, formData.description, formData.superpower, formData.catch_phase);
    }

    return (
        <HeroReduxForm heroProfile={props.heroProfile} baseUrl={props.baseUrl} savePhoto={props.savePhoto} addHero={props.addHero} onSubmit={onSubmit}/>
    );
}

export default Form;