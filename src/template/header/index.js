import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const setPage = this.props.setPage
        return (
            <div className="thishome">
                <div className="logout">
                    <button className="button button5" onClick={() => setPage("login")}>Logout</button>
                </div>
            </div>
        );
    }
}

export default Header;