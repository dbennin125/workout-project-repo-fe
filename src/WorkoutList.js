import React, { Component } from 'react'
// import request from 'superagent';
import SingleItem from './SingleItem';
import { getExercises } from './Api-Calls.js'



export default class WorkoutList extends Component {
    //set state
    state = { workouts: [] }
    //fetching data from API we wrote
    componentDidMount =  async () => {
        const data = await getExercises(this.state)
        // console.log(this.state)
        //this.state only needed data on line 16(which comes from line 13), 
        //not data.body which was originally put there.
        this.setState({ workouts: data })
        // console.log(this.state.workouts)
    }
    
    render() {
        return (
            <div className="workoutListContainer">
                <h2 className="workoutTitle">WorkoutList:</h2>
    
                {
                    this.state.workouts.map(workout => {
                        return<SingleItem key="newList" workout= {workout} />
                        
                    }) 
                }
                
            </div>
        )
    }
}
