import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import request from 'superagent';
import SingleItem from './SingleItem.js'


export default class WorkoutPage extends Component {

state = {
    workout: {}
}
 async componentDidMount() {
    const data = await request.get(`https://calm-escarpment-70276.herokuapp.com/ex?search=${this.props.match.params.name}`);
    this.setState({ workout: data.body.results[0] })
}
    render() {
       
        return <div>
            <h2>
                <SingleItem workout={this.state.workout} />
            </h2>
        </div>
    }
}
