import React, { Component } from 'react';
import "./input.css"


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { placeholder, name, type, value, onChange } = this.props
        return (
            <input
                className=""
                placeholder={placeholder}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        );
    }
}

export default Input;