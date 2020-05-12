import React, { Component } from 'react'
// import request from 'superagent';
import SingleItem from './SingleItem';
import { getExercises } from './Api-Calls.js'



export default class WorkoutList extends Component {
    //set state
    state = { workouts: [], filter: '' }
    //fetching data from API we wrote
    componentDidMount =  async () => {
        
        this.setState({ loadingPage: true });
        const data = await getExercises(this.state)
        // console.log(this.state)
        //this.state only needed data in setState(which comes from line 13), 
        //not data.body which was originally put there.
        this.setState({ loadingPage: false })
        this.setState({ workouts: data })
        // console.log(this.state.workouts)
        //add loading state
    }

    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
    }
    render() {
        // console.log(this.state.filter);
        const { workouts, loadingPage } = this.state
        return (
            <div className="workoutListContainer">
                <h2>WorkoutList:</h2>
                <select onChange={this.handleFilter}>
                    <option value="">Choose</option>
                    <option value="resistance">Res</option>
                    <option value="Cardio">Car</option>
                    <option value="calastenticse">calastentics</option>
                
                </select>
    
                {   
                
                loadingPage
                ?<img src='https://s3.scoopwhoop.com/anj/loading/594155876.gif' alt='loading' />
                : workouts.map(workout => {
                    return<SingleItem key="newList" workout= {workout} />
                })
                
            }
                
            </div>
        )
    }
}
