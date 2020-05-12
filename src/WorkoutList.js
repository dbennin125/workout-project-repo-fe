import React, { Component } from 'react'
// import request from 'superagent';
import SingleItem from './SingleItem';
import { getExercises } from './Api-Calls.js'
import request from 'superagent';



export default class WorkoutList extends Component {
    //set state
    state = { workouts: [], filter: '', typeList: [] }
    //fetching data from API we wrote
    componentDidMount =  async () => {
        
        // this.setState({ loadingPage: true });
        const data = await getExercises(this.state)
        const type = await request.get('https://mysterious-chamber-18797.herokuapp.com/types')
        // console.log(this.state)
        // this.setState({ typeList: type.body })
        //this.state only needed data in setState(which comes from line 13), 
        //not data.body which was originally put there.
        // this.setState({ loadingPage: false })
        this.setState({ 
            workouts: data,
            typeList: type.body  })
        // console.log(this.state.workouts)
        //add loading state
    }

    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
    }
    render() {
        console.log(this.state.workout);
        const { filter, workouts, typeList, loadingPage } = this.state
        return (
            <div className="workoutListContainer">
                <h2>WorkoutList:</h2>
                <select onChange={this.handleFilter}>
                    <option  value="">Choose</option>
                    {
                        typeList.map(
                            type => <option value={type.type}>{type.type}</option> ) 
                    }
                
                </select>
    
                {   
                loadingPage
                ?<img src='https://s3.scoopwhoop.com/anj/loading/594155876.gif' alt='loading' />
                :workouts
                .filter(workout => {
                    if (!filter) return true;
                    return workout.type === filter})
                .map(workout => {
                    return<SingleItem key="newList" workout={workout} />
                })
                
            }
                
            </div>
        )
    }
}
