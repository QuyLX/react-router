import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../components/Home';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';

class DirectionURL extends Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route  path="/news">
                            <News />
                        </Route>
                        <Route exact path="/detail">
                            <NewsDetail />
                        </Route>
                        <Route  path="/detail/:slug.:id.html">
                            <NewsDetail />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default DirectionURL;