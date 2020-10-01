import React, { Component } from 'react';
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <Link to="/"><li className="navbar-brand js-scroll-trigger" href="/"><b> React Router </b></li></Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                         <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <NavLink to="/news"> <li className="nav-item nav-link js-scroll-trigger"> News
                                </li></NavLink>
                                <NavLink to="/detail"><li className="nav-item nav-link js-scroll-trigger"> Detail
                                </li></NavLink>
                                <NavLink to="/contact"><li className="nav-item nav-link js-scroll-trigger"> Contact
                                </li></NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;