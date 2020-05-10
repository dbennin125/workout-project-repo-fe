import React, { Component } from 'react'
import request from 'superagent';
import SingleItem from './SingleItem';



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
                        return<SingleItem workout= {workout} />
                        
                    }) 
                }
            </div>
        )
    }
}
