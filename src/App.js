import React, { Component } from 'react';
import { Login, About, Register, Detail, FormGaji} from './page';
import "./App.css"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "login",
      userLogin: "",
      userJabatan: "",
			inputFirstname: "",
			inputLastname: "",
			inputUsername: "",
			inputPassword: "",
			usernew : [{nik : "hrd111", name : "Adzka Anshory", username : "Adzka", password : "12345", jabatan : "HRD", gaji : 8000000, tunjangan: 3000000},
                {nik : "mnj111", name : "Vicario Ghalbi", username : "Vicario", password : "12345", jabatan : "Manager", gaji : 6000000, tunjangan: 2000000 },
                {nik : "mnj112", name : "Rafi Pratama", username : "Pratama", password : "12345", jabatan : "Manager", gaji : 6000000, tunjangan: 2000000 },
                {nik : "krw111", name : "Farhan Imami", username : "Farhan", password : "12345", jabatan : "Karyawan", gaji : 4000000, tunjangan: 1500000 },
                {nik : "krw112", name : "Alwan Hibatullah", username : "Alwan", password : "12345", jabatan : "Karyawan", gaji : 4000000, tunjangan: 1500000 },
                {nik : "krw113", name : "Efran Sucipto", username : "Efran", password : "12345", jabatan : "Karyawan", gaji : 4000000, tunjangan: 1500000 }],
      userDetail:[]
    }
}

componentDidMount = () => {

  // const url = fetch('https://jsonplaceholder.typicode.com/users')
  // url.then(response => {
  //   return response.json();
  // })
  // .then( responseJson => {
  //   const dataResponse = responseJson;
  //   const userArray = dataResponse.map((data, index)=> {
  //     return(
  //       {name : data.name,
  //       username : data.username,
  //       password : "12345",
  //       address : data.address.city
  //     }
  //     )
  //   })
  //   this.setState({
  //     usernew: userArray
  //   })
  // });
}

changePage = page => {
  this.setState({
    currentPage: page
  })
}

userLog = (login, jabatan)=> {
  this.setState({
    userLogin: login,
    userJabatan: jabatan
  })
  if(jabatan === "Karyawan"){
    this.setState({currentPage: "detail"})
  }
}

registUser = (newnik, newname, newusername, newpassword, newjabatan) => {
  if(newjabatan === "HRD"){
    const registerUser = {
      nik : newnik,
      name : newname,
      username : newusername,
      password : newpassword,
      jabatan : newjabatan,
      gaji : 8000000,
      tunjangan : 3000000
    }
    this.state.usernew.push(registerUser)
  }else if(newjabatan === "Manager"){
    const registerUser = {
      nik : newnik,
      name : newname,
      username : newusername,
      password : newpassword,
      jabatan : newjabatan,
      gaji : 6000000,
      tunjangan : 2000000
    }
    this.state.usernew.push(registerUser)
  }else {
    const registerUser = {
      nik : newnik,
      name : newname,
      username : newusername,
      password : newpassword,
      jabatan : newjabatan,
      gaji : 4000000,
      tunjangan : 1500000
    }
    this.state.usernew.push(registerUser)
  }
}

saveEditUser = (newID, newnik, newname, newusername, newpassword, newjabatan, newgaji, newtunjangan) => {
  const newgaji1 = Number(newgaji)
  const newtunjangan1 = Number(newtunjangan)
  const editUser = {
    nik : newnik,
    name : newname,
    username : newusername,
    password : newpassword,
    jabatan : newjabatan,
    gaji : newgaji1,
    tunjangan : newtunjangan1
  }
  this.state.usernew.splice(newID, 1, editUser)
}

setDetailUser = userDetail =>{
  this.setState({
    userDetail
  })
}

renderPage = () => {
  if (this.state.currentPage === "home")
      return <About usersArr={this.state.usernew} userJabatan={this.state.userJabatan} setPage={this.changePage} userLog={this.state.userLogin} setDetailUser={this.setDetailUser}/>
  if (this.state.currentPage === "detail")
      return <Detail setPage={this.changePage} userDetail={this.state.userDetail}/>

  if (this.state.currentPage === "register")
      return <Register usersArr={this.state.usernew} setPage={this.changePage} registerUser={this.registUser}/>

  if (this.state.currentPage === "formgaji")
    return <FormGaji usersArr={this.state.usernew} setPage={this.changePage} userDetail={this.state.userDetail} saveEditUser={this.saveEditUser}/>

  return <Login usersArr={this.state.usernew} setPage={this.changePage} userLogin={this.userLog} />
}

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    )
  }
}

export default App;
