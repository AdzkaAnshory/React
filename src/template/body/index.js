import React, { Component } from 'react';
import { About, Login, Register } from '../../page';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onAddHandler = () => { }
    renderList = () => { }

    renderPage = () => {
        const page = this.props.page

        if (page === "about")
            return <About />
        
        if (page === "register")
            return <Register />

        return <Login />
    }

    render() {
        return (
            <div className="body">
                {this.renderPage()}
            </div>
        );
    }
}

export default Body;