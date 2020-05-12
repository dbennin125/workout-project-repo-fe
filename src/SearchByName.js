import React, { Component } from 'react'
import request from 'superagent';
import SingleItem from './SingleItem';



export default class SearchByName extends Component {
    //set state
    state= { 
        namedWorkout: [],
        nameQuery: '',
    }
    //`https://calm-escarpment-70276.herokuapp.com/exercisebyname/=${this.state.nameQuery}` kinda works...
    //fetching data from API we wrote

    //currently my backend is searching for anything...it's basically the same as my find ID, I'll need to reseach more about query in SQL
    //my backend will need to have the search? for it to link up.
    componentDidMount =  async () => {
        const data = await request.get(`https://calm-escarpment-70276.herokuapp.com/exercisebyname/=${this.state.nameQuery}`)
        console.log(this.state.nameQuery, '====')
        this.setState({ namedWorkout: data.body })
        console.log(this.state.namedWorkout, '||');
    }
    
    render() {
        return (
            <div>
                <h2>Look a this</h2>
                {
                    this.state.namedWorkout.map(workout => {
                        return<SingleItem workout= {workout} />
                        
                    }) 
                }
            </div>
        )
    }
}