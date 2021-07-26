import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import './about.css'

class About extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			userLogin: "adzka123@gmail.com",
			inputFirstname: "",
			inputLastname: "",
			inputUsername: "",
			inputPassword: "",
			listUser : [
				{firstName: "Adzka" , lastName : "Anshory", username :"adzka123@gmail.com" , password : "adzka123"},
				{firstName: "Rafi" , lastName : "Pratama", username :"rafi123@gmail.com" , password : "rafi123"},
				{firstName: "Vicario" , lastName : "Ghalbi", username :"vicario123@gmail.com" , password : "vicario123"}]
		 }
	}

	renderList = () =>{
		return this.state.listUser.map((users, index) => {
			if(users.status && users.status === "new")
				return(
					<tr key={index}>
						<td></td>
						<td><input type="text" name="inputFirstname" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputLastname" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputUsername" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputPassword" onChange={this.onChangeHandler}></input></td>
						<td>
							<button type="submit" onClick={this.onSaveAdd}>Save</button>
							<button onClick={this.onCancel}>Cancel</button>
						</td>
					</tr>
				)
			if(users.status && users.status === "edit")
				return (<tr key={index}>
					<td>{index + 1}</td>
					<td>
					<input
						name="inputFirstname"
						type="text" value={this.state.inputFirstname} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputLastname"
						type="text" value={this.state.inputLastname} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputUsername"
						type="text" value={this.state.inputUsername} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputPassword"
						type="text" value={this.state.inputPassword} onChange={this.onChangeHandler} />
					</td>
					<td>
					<button type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
					<button onClick={this.onCancel}>Cancel</button>
					</td>
				</tr>)	
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{users.firstName}</td>
					<td>{users.lastName}</td>
					<td>{users.username}</td>
					<td>{users.password}</td>
					<td>
						<button onClick={() => this.editHandler(index)}>Edit</button>
						<button onClick={() => this.deleteHandler(index)}>Delete</button>
					</td>
				</tr>
			)
		})
	}

	onChangeHandler = e => {
		this.setState({
		  [e.target.name]: e.target.value
		})
		console.log(this.inputUsername)
	  }

	addHandler = () => {
		const newList = {
			username: "",
			password: "",
			status: "new"
		}
		this.setState(oldState => ({
			listUser: [newList,...oldState.listUser]
		}))
	}

	editHandler = id => {
		const checkFilter = this.state.listUser.filter(users => users.status)
		const checkuser = this.state.listUser[id].username;
		if(checkuser !== this.state.userLogin) return alert("Tidak bisa mengedil user lain")
		
		if(checkFilter.length > 0)
		return alert("Save terlebih dahulu!!")
  
		const user = this.state.listUser[id]
		const newData = {
			username: user.username,
			password: user.password,
			status: "edit"
		}
	
		let userUpdate = this.state.listUser
		userUpdate.splice(id, 1, newData)
	
		this.setState({
			listUser: userUpdate,
			inputUsername: user.username,
			inputPassword: user.password,
		})
	}

	deleteHandler = index => {
		const checkuser = this.state.listUser[index].username;
		if(checkuser === this.state.userLogin) return alert("Tidak bisa menghapus data sendiri")

		let userDelete = this.state.listUser
		userDelete.splice(index, 1)
		return this.renderList()
	}

	onSaveAdd = () => {
		const newData = {
			firstName: this.state.inputFirstname,
			lastName: this.state.inputLastname,
			username: this.state.inputUsername,
			password: this.state.inputPassword,
			status: "added"
		}

		delete newData.status;
	
		let userUpdate = this.state.listUser
		userUpdate.splice(0, 1, newData)
		console.log(this.state.listUser)
		return this.renderList()
	}

	onSaveEdit = id =>{
		const newData = {
			firstName: this.state.inputFirstname,
			lastName: this.state.inputLastname,
			username: this.state.inputUsername,
			password: this.state.inputPassword,
			status: ""
		}
		console.log(newData)
	
		let userUpdate = this.state.listUser
		userUpdate.splice(id, 1, newData)
		return this.renderList()
	}

	onCancel = () => {
		return this.renderList()
	}

	// logCheck = 
	render() { 
		return ( 
		<>	<div className="">
			<button onClick={this.addHandler}>Add New</button>
			<table className="container table table-striped sampleTable table-responsive">
				<thead>
					<tr>
						<td>No</td>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Username</td>
						<td>Password</td>
					</tr>
				</thead>
				<tbody>
					{this.renderList()}
				</tbody>
			</table>
			</div>
		</>
		);
	}
}
 
export default About;