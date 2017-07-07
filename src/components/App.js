import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {toggleActiveClass} from '../constants/helperFunctions';

// This is a className-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    render() {
        return (
            <div>
                <header id="header" className="container">
                    <nav id="menu" className="navbar navbar-default navbar-fixed-top navbar-toggleable-md row">
                        <button className="btn btn-primary btn-sm navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="glyphicon glyphicon-menu-hamburger"/>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarNavDropdown">
                            <ul className="nav navbar-nav navbar-right" >
                                <li className="nav"><IndexLink to="/" onClick={(e) => toggleActiveClass(e)}>Home</IndexLink></li>
                                <li className="nav"><Link to="/task" onClick={(e) => toggleActiveClass(e)}>Task</Link></li>
                                <li className="nav"><Link to="/timer" onClick={(e) => toggleActiveClass(e)}>Timer</Link></li>
                            </ul>
                        </div>

                    </nav>
                </header>

                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;