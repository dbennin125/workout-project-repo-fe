import React, { Component } from 'react'
// import request from 'superagent';
import SingleItem from './SingleItem.js'
import { getExercise } from './Api-Calls.js'



export default class WorkoutPage extends Component {
//this.props.match.params.id is coming the link in singleitem.js
state = {
    workoutId: null
}
 async componentDidMount() {
    //fetching data from api call with you id from the link on singleitem.js
    const fetchedData = await getExercise(this.props.match.params.id);
    //setting state to fetchedData
    this.setState({ workoutId: fetchedData })
    // console.log(this.state.workoutId)
}

    render() {
    //    console.log(this.state.workoutId)
    const {workoutId} = this.state;
    //practicing deconstructors
        return <div className="workoutPageContainer">
            <h2>
            {
                workoutId
                ? <SingleItem workout={workoutId} />
                : <img src='https://s3.scoopwhoop.com/anj/loading/594155876.gif' alt='loading' />}
            
            </h2>
        </div>
    }
}
