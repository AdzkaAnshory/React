import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="hero-nav">
                <div className="hero-nav__inner">
                    <h1>Neat Title</h1>
                </div>
            </div>
        );
    }
}

export default Header;