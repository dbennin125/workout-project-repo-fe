import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class SingleItem extends Component {
    render() {
        return (
            <li>
                <Link to={`/workout/${this.props.workout.id}`}><h2>Workout Name: {this.props.workout.name}</h2> 
                </Link>
                
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
