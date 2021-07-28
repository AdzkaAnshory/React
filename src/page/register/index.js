import React, { Component } from 'react';
import '../../css/style.css'
import { RowInput } from '../../component';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputAddress: "",
            inputRegUsername: "",
            inputRegPassword: "",
            userlist:[]
     }
  }

    componentDidMount = () => {
        const usernew = this.props.usersArr
        this.setState({
            userlist:usernew
        })
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }
  
    registerUser = () => {
        const registUser = this.props.registerUser
        const S = this.state
        for(let i = 0; i < this.state.userlist.length; i++){
          if(S.inputRegUsername !== this.state.userlist[i].username){
          registUser(S.inputName,S.inputRegUsername,S.inputRegPassword,S.inputAddress)
          this.setState({
            inputName: "",
            inputAddress: "",
            inputRegUsername: "",
            inputRegPassword: ""
          })
          return alert("Berhasil Registrasi, Silahkan Login")
          }
        return alert("Registrasi Gagal, Username "+S.inputRegUsername+" Telah Terdaftar")
        }
      }

    render() { 
    const setStatusPage  = this.props.setPage
        return ( 
            <>
            <div className="main">
                <div className="agile">
                    <div className="signin-form profile">
                        <h3>Register</h3>
                        <RowInput
                                placeholder="Full Name"
                                nameInput="inputName"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputName}
                        />
                        <RowInput
                                placeholder="Address (City)"
                                nameInput="inputAddress"
                                valueInput={this.state.inputAddress}
                                onChangeEvent={this.setValue}
                        />
                        <RowInput
                                placeholder="Username"
                                nameInput="inputRegUsername"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputRegUsername}
                        />
                        <RowInput
                                placeholder="Password"
                                nameInput="inputRegPassword"
                                typeInput="password"
                                valueInput={this.state.inputRegPassword}
                                onChangeEvent={this.setValue}
                        />
                        <div className="tp">
                            <button className="btnnn" onClick={ this.registerUser} >Register</button>
							<button className="btnnn" onClick={()=>setStatusPage("login")}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Register;