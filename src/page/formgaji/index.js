import React, { Component } from 'react';
import '../../css/style.css'
import { RowInput } from '../../component';

class FormGaji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: "",
            inputNIK: "",
            inputName: "",
            inputUsername: "",
            inputPassword: "",
            inputJabatan: "",
            inputGaji: "",
            inputTunjangan: ""
     }
  }

    componentDidMount = () => {
        const userss = this.props.userDetail
        console.log("id", userss.iduser)
        this.setState({
            userID : userss.iduser,
            inputNIK : userss.nik,
            inputName : userss.name,
            inputUsername : userss.username,
            inputPassword : userss.password,
            inputJabatan : userss.jabatan,
            inputGaji : userss.gaji,
            inputTunjangan : userss.tunjangan
        })
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }
  
    saveUser = () => {
        const setStatusPage = this.props.setPage
        const saveEditUser = this.props.saveEditUser
        const S = this.state
          saveEditUser(S.userID, S.inputNIK,S.inputName,S.inputUsername,S.inputPassword,S.inputJabatan,S.inputGaji,S.inputTunjangan)
          this.setState({
            userID: "",
            inputNIK: "",
            inputName: "",
            inputUsername: "",
            inputPassword: "",
            inputJabatan: "",
            inputGaji: "",
            inputTunjangan: ""
          })
          setStatusPage("home")
          return alert("Berhasil Edit Data User "+this.state.inputName)
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
                                nameInput="inputNIK"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputNIK}
                        />
                        <RowInput
                                nameInput="inputName"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputName}
                        />
                        <RowInput
                                nameInput="inputJabatan"
                                valueInput={this.state.inputJabatan}
                                onChangeEvent={this.setValue}
                        />
                        <RowInput
                                nameInput="inputUsername"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputUsername}
                        />
                         <RowInput
                                nameInput="inputGaji"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputGaji}
                        />
                         <RowInput
                                nameInput="inputTunjangan"
                                onChangeEvent={this.setValue}
                                valueInput={this.state.inputTunjangan}
                        />
                        <div className="tp">
                            <button className="btnnn" onClick={ this.saveUser} >Save</button>
							<button className="btnnn" onClick={()=>setStatusPage("home")}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default FormGaji;