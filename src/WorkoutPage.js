import React, { Component } from 'react'
import request from 'superagent';
import SingleItem from './SingleItem.js'
import { getExercise } from './Api-Calls.js'



export default class WorkoutPage extends Component {
//this.props.match.params.id is coming the link in singleitem.js
state = {
    workoutId: null,
    name: ''
}
 async componentDidMount() {
    //fetching data from api call with your id from the link on singleitem.js
    const fetchedData = await getExercise(this.props.match.params.id);
    //setting state to fetchedData
    
    this.setState({ workoutId: fetchedData })
    // console.log(this.state.workoutId)
}

handleSubmit = async (e) => {
    e.preventDefault();
    const updateNameDate = await request.put(`https://mysterious-chamber-18797.herokuapp.com/exercises/${this.props.match.params.id}`, 
    { name: this.state.name })
    console.log('======');
    console.log(updateNameDate, 'hello');
    console.log('======');
    

} 


handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    // console.log(this.state.name)
    //state works
} 
    render() {
    //    console.log(this.state.workoutId)
    const {workoutId, } = this.state;
    //practicing deconstructors
        return <div className="workoutPageContainer">
            <h2>{
                workoutId
                ? <SingleItem workout={workoutId} />
                : <img src='https://s3.scoopwhoop.com/anj/loading/594155876.gif' alt='loading' />}
            
            </h2>
            <form className="form"onSubmit={this.handleSubmit}>
            <lable>
                Name: 
                <input onChange={this.handleNameChange} value={this.state.name} name="Name" />
            </lable>
            <button className="button">Submit request</button>
            </form>
        </div>
    }
}
