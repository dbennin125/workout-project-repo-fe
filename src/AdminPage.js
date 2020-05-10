import React, { Component } from 'react'

export default class AdminPage extends Component {
    
//start by initalizing state    
    state = {
        name: '',
        weight: 0,
        is_fullbody: false,
        type: '',
    
    }    
//create my handle for submitting form
handleSubmit = (e) => {
    e.preventDefault();
}  

//create handle for name
handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state.name)
}    
//create handle change for weight
handleWeightChange = (e) => {
    this.setState({ weight: e.target.value });
    
}    
 //create type change handle   
handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
    
}
        
    
    
    
    
    
    
    
    
    render() {
        return (
            <div>
                Hello this is the admin page. This should be linked.
            </div>
        )
    }
}
