import React, { Component } from 'react'

export default class SingleItem extends Component {
    render() {
        return (
            <li>
                <h2>Workout Name: {this.props.workout.name}</h2> 
                <p>Weight: {this.props.workout.weight}</p>
                <p>{this.props.workout.is_fullbody
                    ? 'it is a full body workout'
                    : 'it is not a full body workout'}
                </p>
                <p>Type of workout: {this.props.workout.type}</p>
            </li>
        )
    }
}
