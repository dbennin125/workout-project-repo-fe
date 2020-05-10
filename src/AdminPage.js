import React, { Component } from 'react'
import request from 'superagent';

export default class AdminPage extends Component {
    
//start by initalizing state    
    state = {
        name: '',
        weight: 0,
        is_fullbody: false,
        type: '',
    
    }    
//create my handle for submitting form
handleSubmit = async (e) => {
    e.preventDefault();
    const newExercise = await request.post(`https://calm-escarpment-70276.herokuapp.com/exercises/`, {
        name: this.state.name,
        weight: this.state.weight,
        is_fullbody: this.state.is_fullbody,
        type: this.state.type,
    })
    console.log('======');
    console.log(newExercise, 'hello');
    console.log('======');
}  

//create handle for name
handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state.name)
}    
//create handle change for weight
handleWeightChange = (e) => {
    this.setState({ weight: e.target.value });
    console.log(this.state.weight)
}    
//create a is_fullboddy handle
handleIs_fullbody = (e) => {
    this.setState({ is_fullbody: e.target.value });
}
 //create type change handle   
handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
    console.log(this.state.type)
}

    
    
    
    
    
    
    
    render() {
        const { name, weight, is_fullbody, type } = this.state;
        return (
            <div className="submit-container">
            <form onSubmit={this.handleSubmit}>
                <h2>Hello this is the admin page. Add exercises as needed.</h2>
                <lable>
                Name
                <input onChange={this.handleNameChange} value={name} name="Name" />
                </lable>
                
                <lable>
                Weight
                <input onChange={this.handleWeightChange} value={weight} name="Weight" />
                </lable>

                <label>
                    Is a full body workout
                    <input onChange={this.handleIs_fullbody} checked={ is_fullbody === '1' } name="is_fullbody" type="radio" value="1" />
                </label>

                <label>
                    Is NOT a full body workout
                    <input onChange={this.handleIs_fullbody} checked={ is_fullbody === '0' } name="is_fullbody" type="radio" value="0" />
                </label>
                
                <lable>
                Type
                <input onChange={this.handleTypeChange} value={type} name="Type" />
                </lable>
            <button>Submit request</button>
            </form>
            </div>
        )
    }
}
