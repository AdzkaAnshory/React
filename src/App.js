import React, { Component } from 'react';
import { Login, About, Register} from './page';
import "./App.css"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "login",
      userLogin: "",
			inputFirstname: "",
			inputLastname: "",
			inputUsername: "",
			inputPassword: "",
			usernew : []
  }
}

componentDidMount = () => {

  const url = fetch('https://jsonplaceholder.typicode.com/users')
  url.then(response => {
    return response.json();
  })
  .then( responseJson => {
    const dataResponse = responseJson;
    const userArray = dataResponse.map((data, index)=> {
      return(
        {name : data.name,
        username : data.username,
        password : "12345",
        address : data.address.city
      }
      )
    })
    this.setState({
      usernew: userArray
    })
  });
}

changePage = page => {
  this.setState({
    currentPage: page
  })
}

userLog = login => {
  this.setState({
    userLogin: login
  })
}

registUser = (newname, newusername, newpassword, newaddress) => {
  const registerUser = {
    name : newname,
    username : newusername,
    password : newpassword,
    address : newaddress
  }
  this.state.usernew.push(registerUser)
}

renderPage = () => {

  if (this.state.currentPage === "home")
      return <About usersArr={this.state.usernew} setPage={this.changePage} userLog={this.state.userLogin}/>

  if (this.state.currentPage === "register")
      return <Register usersArr={this.state.usernew} setPage={this.changePage} registerUser={this.registUser}/>

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
