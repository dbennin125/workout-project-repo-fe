import React, { Component } from 'react'
import request from 'superagent';



export default class WorkoutList extends Component {
    //set state
    state= { workouts: [] }
    //fetching data from API we wrote
    componentDidMount =  async () => {
        const data = await request.get(`https://calm-escarpment-70276.herokuapp.com/exercises`)
        this.setState({ workouts: data.body })
    }
    
    render() {
        return (
            <div>
                <h2>WorkoutList:</h2>
                {
                    this.state.workouts.map(workout => {
                        return <li>
                           <p>Workout Name: {workout.name}</p> 
                            <p>Weight: {workout.weight}</p>
                            <p>{workout.is_fullbody
                            ? 'it is a full body workout'
                            : 'it is not a full body workout'}
                            </p>
                            <p>Type of workout: {workout.type}</p>
                        </li>
                        
                    }) 
                }
            </div>
        )
    }
}
