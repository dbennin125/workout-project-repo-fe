import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import request from 'superagent';
import SingleItem from './SingleItem.js'


export default class WorkoutPage extends Component {

state = {
    workoutId: {}
}
 async componentDidMount() {
    const data = await request.get(`https://calm-escarpment-70276.herokuapp.com/exercises/${this.props.match.params.id}`);
    this.setState({ workoutId: data.body })
    // console.log(this.state.workoutId)
}

    render() {
    //    console.log(this.state.workoutId)
        return <div>
            <h2>
                {
                this.state.workoutId    
                ?<SingleItem workout={this.state.workoutId} />
                : <img src="https://s3.scoopwhoop.com/anj/loading/594155876.gif" alt="loading" />
                }
            </h2>
        </div>
    }
}
