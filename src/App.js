import React, { Component } from 'react';
// import Home from "./Home"
// import Header from "./template/header"
// import Nav from './template/navigation';
// import Body from './template/body';
import { Header, Nav, Body } from './template';
import "./App.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "login",
      userInputName: "",
      userInputAge: "",
      userInputAddress: "",
  }
}

  // renderList = () => {
  //   return this.state.userList.map((user, index) => {
  //     if (user.status && user.status === "new")
  //       return (<tr key={index}>
  //         <td></td>
  //         <td><input type="text" /></td>
  //         <td><input type="number" /></td>
  //         <td><input type="text" /></td>
  //         <td>
  //           <button>Save</button>
  //           <button>Cancel</button>
  //         </td>
  //       </tr>)

  //     if (user.status && user.status === "edit")
  //       return (<tr key={index}>
  //         <td>{index + 1}</td>
  //         <td>
  //           <input
  //             name="userInputName"
  //             type="text" value={this.state.userInputName} onChange={this.onChangeHandler} />
  //         </td>
  //         <td>
  //           <input
  //             name="userInputAge"
  //             type="number" value={this.state.userInputAge} onChange={this.onChangeHandler} />
  //         </td>
  //         <td>
  //           <input
  //             name="userInputAddress"
  //             type="text" value={this.state.userInputAddress} onChange={this.onChangeHandler} />
  //         </td>
  //         <td>
  //           <button>Save</button>
  //           <button>Cancel</button>
  //         </td>
  //       </tr>)

  //     return (<tr key={index}>
  //       <td>{index + 1}</td>
  //       <td>{user.name}</td>
  //       <td>{user.age}</td>
  //       <td>{user.address}</td>
  //       <td>
  //         <button onClick={() => this.onEditHandler(index)}>Edit</button>
  //         <button>Delete</button>
  //       </td>
  //     </tr>)
  //   })
  // }

  // onChangeHandler = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // onAddHandler = () => {
  //   const newData = {
  //     name: "",
  //     age: 0,
  //     address: "",
  //     status: "new"
  //   }
  //   this.setState(oldState => ({
  //     userList: [newData, ...oldState.userList]
  //   }))
  // }

  // onEditHandler = id => {
  //   const checkFilter = this.state.userList.filter(user => user.status)

  //   if (checkFilter.length > 0)
  //     return alert("Save dulu woy!!")

  //   const user = this.state.userList[id]
  //   const newData = {
  //     name: user.name,
  //     age: user.age,
  //     address: user.address,
  //     status: "edit"
  //   }

  //   let userUpdate = this.state.userList
  //   userUpdate.splice(id, 1, newData)

  //   this.setState({
  //     userList: userUpdate,
  //     userInputName: user.name,
  //     userInputAge: user.age,
  //     userInputAddress: user.address,
  //   })
  // }

  changePage = page => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <>
        <Header />
        <Nav page={this.state.currentPage} goToPage={this.changePage} />
        <Body page={this.state.currentPage} />
        {/* <button onClick={() => this.changePage("about")}>Change</button> */}
      </>
    )
  }
}

export default App;
