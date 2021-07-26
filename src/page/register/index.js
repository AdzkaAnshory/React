import React, {Component} from 'react';
import { About } from '../about';

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser : {
                        firstName: "",
                        lastName: "", 
                        username: "",
                        password: ""
                    }
        }
    }

    onChangeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    render() { 
        console.log(this.state.newUser)
        const { regist } = this.props
        return ( 
            <>
                <div>
                        <label style={labelStyle} for="firstName">First Name :</label>
                        <input style={inputStyle} type="text" name="newUser.firstName" 
                        value={this.state.newUser.firstName} onChange={this.onChangeHandler}></input>
                </div>
                <div>
                        <label style={labelStyle} for="lastName">Last Name :</label>
                        <input style={inputStyle} type="text" name="newUser.lastName" 
                        value={this.state.newUser.lastName} onChange={this.onChangeHandler}></input>
                </div>
                <div>
                        <label style={labelStyle} for="username">Username :</label>
                        <input style={inputStyle} type="text" name="newUser.username" 
                        value={this.state.newUser.username} onChange={this.onChangeHandler}></input>
                </div>
                <div>
                        <label style={labelStyle} for="password">Password :</label>
                        <input style={inputStyle} type="password" name="password"
                        value={this.state.newUser.password} onChange={this.onChangeHandler}></input>
                </div>
                <div>
                    <button style={submitStyle} type="submit" onSubmit={() => regist(this.state.newUser)}>Submit</button>
                    {/* <About onSubmit={() => regist(this.state.newUser)}/> */}
                </div>
            </>
         );
    }
}
 
export default Register;