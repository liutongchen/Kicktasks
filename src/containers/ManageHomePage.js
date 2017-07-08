import React from 'react';
import PropTypes from 'prop-types'
import HomePage from '../components/Home/HomePage';
import {moveTab} from '../constants/helperFunctions';

class ManageHomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.launchApp = this.launchApp.bind(this);
    }

    launchApp() {
        moveTab("taskTab")
        this.context.router.push("/task");
    }
    
    render() {
        return (
            <HomePage launchAppHandler={this.launchApp}/>
        )
    }
}

ManageHomePage.contextTypes = {
    router: PropTypes.object
}

export default ManageHomePage

