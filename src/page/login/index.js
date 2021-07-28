import React, { Component } from 'react';
import '../../css/style.css'
import './login.css'
import { RowInput } from '../../component';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputName: "",
        inputAddress: "",
        inputUsername: "",
        inputPassword: "",
        inputRegUsername: "",
        inputRegPassword: ""
     }
  }


  setValue = el => {
    this.setState({
        [el.target.name]: el.target.value
    })
  }
  
  loginUser = () => {
    const usernew = this.props.usersArr
    const setStatusPage  = this.props.setPage
    const userLogin  = this.props.userLogin
    for(let i = 0;i < usernew.length;i++){
      if(this.state.inputUsername === usernew[i].username && this.state.inputPassword === usernew[i].password){
        setStatusPage("home")
        userLogin(this.state.inputUsername)
        return alert("Login Username " +this.state.inputUsername+ " Berhasil")
      }
        
      return alert("Username atau Password tidak terdaftar")
      
    } 
  }

  render() { 
    const setStatusPage  = this.props.setPage
    return ( 
      <>
      <div className="main">
        <div className="w3">
          <div className="signin-form profile">
            <h3>Login</h3>
            {/* <div className="login-form"> */}
                <RowInput
                    placeholder="Type E-mail Here"
                    nameInput="inputUsername"
                    onChangeEvent={this.setValue}
                    valueInput={this.state.inputUsername}
                />
                <RowInput
                    placeholder="Type Password Here"
                    nameInput="inputPassword"
                    typeInput="password"
                    valueInput={this.state.inputPassword}
                    onChangeEvent={this.setValue}
                />
                {/* {console.log(this.props.usersArr.length)} */}
                <div className="tp">
							    <button className="btnnn" onClick={this.loginUser}>Login</button>
							    <button className="btnnn" onClick={()=>setStatusPage("register")}>Register</button>
						    </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      </>
     );
  }
}
 
export default Login;
