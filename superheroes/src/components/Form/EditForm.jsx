import React from 'react';
import classes from './Form.module.css';
import axios from 'axios';

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        // this.onChangeNickName = this.onChangeNickName.bind(this);
        // this.onChangeRealName = this.onChangeRealName.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeSuperPower = this.onChangeSuperPower.bind(this);
        // this.onChangeCatchPhrase = this.onChangeCatchPhrase.bind(this);
        // this.onChangePhoto = this.onChangePhoto.bind(this);


        this.state = {
            id: 0,
            nickname: '',
            realname: '',
            description: '',
            superpower: '',
            catch_phase: '',
            photo: null
        }
    }
    componentDidMount(){
        if(this.props.heroProfile.id){
            axios.get(`http://localhost:80/superheroes/back/server.php?heroId=${this.props.heroProfile.id}`)
        .then(response=>{
            this.setState({
                id: response.data.id,
                nickname: response.data.nickname,
                realname: response.data.real_name,
                description: response.data.origin_description,
                superpower: response.data.superpowers,
                catch_phase: response.data.catch_phase,
                photo: this.props.baseUrl + response.data.images,
                newPhoto: null
            })
        })
        }    
    }

    // onChangeNickName(e){
    //     this.setState({
    //         nickname: e.target.value
    //     })
    // }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    fileSelectedHandler = e => {
        this.setState({
            newPhoto: e.target.files[0]
        })
    }
    submitHandler = (e) => {
        const { id } = this.state;
        const { nickname } = this.state;
        const { realname } = this.state;
        const { description } = this.state;
        const { superpower } = this.state;
        const { catch_phase } = this.state;
        // const { newPhoto } = this.state;

        const formData = new FormData();

        formData.append('id', id);
        formData.append('updateNickname', nickname);
        formData.append('updateRealname', realname);
        formData.append('updateDescription', description);
        formData.append('updateSuperpower', superpower);
        formData.append('updateCatch_phrase', catch_phase);
        // formData.append('photo', newPhoto, newPhoto.name);

        console.log(this.state);
        axios.post(`http://localhost:80/superheroes/back/server.php`, formData)
        .then(resposne=>{
            console.log(resposne);
        })
        .catch(error => {
            console.log(error);
        })
          
               
    }
    render() {
        return (
            <form className={classes.form} onSubmit={this.submitHandler}>
                <h2>Edit Hero</h2>
                <div className={classes.formBlock}>
                    <img src={this.state.photo}></img>
                    <div className={classes.field}>
                        <label>Name: </label>
                        <input placeholder="Name" value={this.state.nickname} name="nickname" type="text" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Real name: </label>
                        <input placeholder="Real name" value={this.state.realname} name="realname" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Description: </label>
                        <textarea placeholder="Description" value={this.state.description} name="description" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Superpower: </label>
                        <textarea placeholder="Superpower" value={this.state.superpower} name="superpower" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.field}>
                        <label>Catch phrase: </label>
                        <textarea placeholder="Catch phrase" value={this.state.catch_phase} name="catch_phase" onChange={this.changeHandler} />
                    </div>
                    {/* <input type="file" onChange={this.fileSelectedHandler}></input> */}
                    <input type="submit" value="Save" name="addHero"></input>
                </div>
            </form>
        )
    }
}

export default EditForm;
