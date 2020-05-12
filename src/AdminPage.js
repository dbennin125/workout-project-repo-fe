import React, { Component } from 'react'
import request from 'superagent';

export default class AdminPage extends Component {
    
//start by initalizing state    
    state = {
        name: '',
        weight: 0,
        is_fullbody: false,
        type: 0,
    
    }    
//create my handle for submitting form
handleSubmit = async (e) => {
    e.preventDefault();
    const newExercise = await request.post(`https://mysterious-chamber-18797.herokuapp.com/exercises/`, {
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
            <form className="form"onSubmit={this.handleSubmit}>
                <h2>Hello this is the admin page. Add exercises as needed.</h2>
                <p>For Type below use: 1 for resistance, 2 for calastentics, and 3 for cardio.</p>
                <lable>
                Name: 
                <input onChange={this.handleNameChange} value={name} name="Name" />
                </lable>
                
                <lable>
                Weight: 
                <input onChange={this.handleWeightChange} value={weight} name="Weight" />
                </lable>

                <label>
                    <input onChange={this.handleIs_fullbody} checked={ is_fullbody === '1' } name="is_fullbody" type="radio" value="1" />
                    Is a full body workout
                </label>

                <label>
                    <input onChange={this.handleIs_fullbody} checked={ is_fullbody === '0' } name="is_fullbody" type="radio" value="0" />
                    Is NOT a full body workout
                </label>
                
                <lable>
                Type: 
                <input onChange={this.handleTypeChange} value={type} name="Type" />
                </lable>
            <button className="button">Submit request</button>
            </form>
            </div>
        )
    }
}
