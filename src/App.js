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
import HomePage from './HomePage.js';
import AdminPage from './AdminPage.js';

//route page, pretty standard. I could make a searchbar if I wanted since I have a search by name backend point as well. 
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
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/workouts" 
                            render={(routerProps) => <WorkoutList {...routerProps} />} 
                        />
                        <Route 
                            path="/workout/:id" 
                            render={(routerProps) => <WorkoutPage {...routerProps} />} 
                        />
                        <Route 
                            path="/aboutMe" 
                            render={(routerProps) => <AboutMe {...routerProps} />} 
                        />
                                                <Route 
                            path="/admin" 
                            exact
                            render={(routerProps) => <AdminPage {...routerProps} />} 
                        />
                    </Switch>

                </Router>
               
              </div>
        )
    }
}
