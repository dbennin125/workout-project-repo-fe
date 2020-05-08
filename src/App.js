import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import WorkoutPage from './WorkoutPage.js';
import WorkoutList from './WorkoutList.js';
import Header from './Header.js';
import AboutMe from './AboutMe.js';


export default class App extends Component {
    render() {
        return (
            <div>
              <Header />
               <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <WorkoutList {...routerProps} />} 
                        />
                        <Route 
                            path="/workout/:" 
                            render={(routerProps) => <WorkoutPage {...routerProps} />} 
                        />
                        {/* <Route 
                            path="/aboutMe/:" 
                            render={(routerProps) => <AboutMe {...routerProps} />} 
                        /> */}
                    </Switch>
                    <AboutMe/>
                </Router>
               
              </div>
        )
    }
}
