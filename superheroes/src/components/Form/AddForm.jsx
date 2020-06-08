import React from 'react';
import classes from './Form.module.css';
import axios from 'axios';


class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            realname: '',
            description: '',
            superpower: '',
            catch_phase: '',
            photo: null
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    fileSelectedHandler = e => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    submitHandler = (e) => {
        const { nickname } = this.state;
        const { realname } = this.state;
        const { description } = this.state;
        const { superpower } = this.state;
        const { catch_phase } = this.state;
        const { photo } = this.state;

        const formData = new FormData();

        if (this.state.nickname.length < 250 &&
            this.state.realname.length < 250 &&
            this.state.description.length < 250 &&
            this.state.superpower.length < 250 &&
            this.state.catch_phase.length < 250) {
                formData.append('nickname', nickname);
                formData.append('realname', realname);
                formData.append('description', description);
                formData.append('superpower', superpower);
                formData.append('catch_phrase', catch_phase);
                formData.append('photo', photo, photo.name);


                console.log(this.state);
                axios.post(`http://localhost:80/superheroes/back/server.php`, formData)
                    .then(resposne => {
                        console.log(resposne);
                    })
                    .catch(error => {
                        console.log(error);
                    })
        }else{
            alert("some row is longer then 250 symbols");
            e.preventDefault();
        }


    }
    render() {
        const { nickname, realname, description, superpower, catch_phase } = this.state;
        return (
            <form className={classes.form} onSubmit={this.submitHandler}>
                <h2>Add new Hero</h2>
                <div className={classes.formBlock}>
                    <div className={classes.field}>
                        <label>Name: </label>
                        <input placeholder="Name" required value={nickname} name="nickname" type="text" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Real name: </label>
                        <input placeholder="Real name" required value={realname} name="realname" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Description: </label>
                        <textarea placeholder="Description" required value={description} name="description" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Superpower: </label>
                        <textarea placeholder="Superpower" required value={superpower} name="superpower" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Catch phrase: </label>
                        <textarea placeholder="Catch phrase" required value={catch_phase} name="catch_phase" onChange={this.changeHandler} />
                    </div>
                    <input type="file" required onChange={this.fileSelectedHandler}></input>
                    <input type="submit" value="Add" name="addHero"></input>
                </div>
            </form>
        )
    }
}

export default AddForm;