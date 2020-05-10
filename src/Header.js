import React, { Component } from 'react'

//the nav worked better at pointing were to go than 
//just linking
export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Gym!</h1>
                <nav>
                   <a href="../">Home</a>
                   <p>
                    <a href="../workouts">WorkoutList</a>
                    </p>
                    <a href="/aboutMe">About Me</a>
                </nav>
                <p>Let's get swole.</p>
            </div>
        )
    }
}
