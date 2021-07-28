import React, {Component} from 'react';
import Header from '../../template/header'
import './about.css'

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLogin: "",
			inputName: "",
			inputAddress: "",
			inputUsername: "",
			inputPassword: "", 
			userList:[]
		 }
	}

	componentDidMount = () => {
		this.setState({
			userList: this.props.usersArr,
			userLogin: this.props.userLog
		})
		console.log("asda", this.state.userLogin)
	}

	renderList = () =>{
		return this.state.userList.map((users, index) => {
			if(users.status && users.status === "edit")
				return (<tr key={index}>
					<td>{index + 1}</td>
					<td>
					<input
						name="inputName"
						type="text" value={this.state.inputName} onChange={this.onChangeHandler} />
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
					<input
						name="inputAddress"
						type="text" value={this.state.inputAddress} onChange={this.onChangeHandler} />
					</td>
					
					<td>
					<button className="btn-save-edit" type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
					<button className="btn-cancel" onClick={() => this.onCancel(index)}>Cancel</button>
					</td>
				</tr>)	
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{users.name}</td>
					<td>{users.username}</td>
					<td>{users.password}</td>
					<td>{users.address}</td>
					<td>
						<button className="btn-save-edit" onClick={() => this.editHandler(index)}>Edit</button>
						<button className="btn-delete" onClick={() => this.deleteHandler(index)}>Delete</button>
					</td>
				</tr>
			)
		})
	}

	setPage = this.props.setPage

	onChangeHandler = e => {
		this.setState({
		  [e.target.name]: e.target.value
		})
		console.log(this.inputUsername)
	  }

	editHandler = id => {
		const checkFilter = this.state.userList.filter(users => users.status)
		const checkuser = this.state.userList[id].username;
		if(checkuser !== this.state.userLogin) return alert("Tidak bisa mengedite user lain")
		
		if(checkFilter.length > 0)
		return alert("Save terlebih dahulu!!")
  
		const user = this.state.userList[id]
		const newData = {
			name : user.name,
			username: user.username,
			password: user.password,
			address: user.address,
			status: "edit"
		}
	
		let userUpdate = this.state.userList
		userUpdate.splice(id, 1, newData)
	
		this.setState({
			userList: userUpdate,
			inputName: user.name,
			inputUsername: user.username,
			inputPassword: user.password,
			inputAddress: user.address
		})
	}

	deleteHandler = index => {
		const checkuser = this.state.userList[index].username;
		if(checkuser === this.state.userLogin) return alert("Tidak bisa menghapus data sendiri")

		let userDelete = this.state.userList
		userDelete.splice(index, 1)
		this.setPage("home")
	}

	onSaveEdit = id =>{
		const newData = {
			name: this.state.inputName,
			username: this.state.inputUsername,
			password: this.state.inputPassword,
			address: this.state.inputAddress,
			status: ""
		}
		console.log(newData)
	
		let userUpdate = this.state.userList
		userUpdate.splice(id, 1, newData)
		this.setPage("home")
	}

	onCancel = id => {
		const newData = {
			name: this.state.inputName,
			username: this.state.inputUsername,
			password: this.state.inputPassword,
			address: this.state.inputAddress,
			status: ""
		}
		console.log(newData)
	
		let userUpdate = this.state.userList
		userUpdate.splice(id, 1, newData)
		this.setPage("home")
	}

	// logCheck = 
	render() { 
		const setPage = this.props.setPage
		return ( 
			<>
			<Header setPage={setPage} />
			<div className="main">
				<div className="thishome">
					<table id="table" className="container table table-striped sampleTable table-responsive">
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Username</th>
							<th>Password</th>
							<th>Address</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
					</table>
				</div>
			</div>
		</>
		);
	}
}
 
export default About;