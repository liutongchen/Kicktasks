import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

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
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarNavDropdown">
                            <ul className="nav navbar-nav navbar-right" >
                                <li className="nav"><IndexLink to="/">Home</IndexLink></li>
                                <li className="nav"><Link to="/task">Task</Link></li>
                                <li className="nav"><Link to="/timer">Timer</Link></li>
                                <li className="nav"><Link to="/punRew">Punish&Reward</Link></li>
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