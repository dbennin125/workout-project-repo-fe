import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class SingleItem extends Component {
    render() {
        //the reason "LINK" in line 8 needs to be workout.id is the
        //backend is pointing to ID which endpoints is id(we could do
        //name later) which will bring you to App.js route page `/workout/`
        //used specifically to display one workout (by Id) which is selected
        
        //I did make a back for workout names so in the future, I could use
        //workout.name for a search bar if I wanted as well.
        return (
            <li name="exerciseList">
                <Link to={`/workout/${this.props.workout.id}`}>

                    <h2>Workout Name: {this.props.workout.name}</h2> 
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
