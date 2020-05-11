import React, { Component } from 'react'
import './App.css'

//the nav worked better at pointing were to go than 
//just linking
export default class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <h1>Welcome to the Gym!</h1>
                <nav className="nav">
                   <a href="../">Home</a>
                   <p>
                    <a href="../workouts">WorkoutList</a>
                    </p>
                    <a href="/aboutMe">About Me</a>
                    <p><a href="/admin">Admin</a></p>
                </nav>
                <p>Let's get swole.</p>
            </div>
        )
    }
}
