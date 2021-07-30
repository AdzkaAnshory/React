import React, {Component} from 'react';
import Header from '../../template/header'
import './about.css'

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLogin: "",
			userJabatan: "",
			inputName: "",
			inputAddress: "",
			inputUsername: "",
			inputPassword: "", 
			userList:[]
		 }
	}

	componentDidMount = () => {
		if(this.props.userJabatan === "Manager"){
			const userfil = this.props.usersArr.filter((item) => item.jabatan !== "HRD").map(({nik, name, username, password, jabatan, gaji, tunjangan})=>({nik, name, username, password, jabatan, gaji, tunjangan}))
			console.log("123123",userfil);
			return this.setState({
				userList: userfil,
				userLogin: this.props.userLog,
				userJabatan: this.props.userJabatan
			})
		}
		return this.setState({
			userList: this.props.usersArr,
			userLogin: this.props.userLog,
			userJabatan: this.props.userJabatan
		})
	}

	renderList = () =>{
		return this.state.userList.map((users, index) => {
			if(this.state.userJabatan === "HRD"){	
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{users.nik}</td>
					<td>{users.name}</td>
					<td>{users.username}</td>
					<td>{users.password}</td>
					<td>{users.jabatan}</td>
					<td>{users.gaji+users.tunjangan}</td>
					<td>
						<button className="btn-save-edit" onClick={() => this.detailHandler(index)}>Detail</button>
						<button className="btn-delete" onClick={() => this.editHandler(index)}>Edit</button>
					</td>
				</tr>
			)}
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{users.nik}</td>
					<td>{users.name}</td>
					<td>{users.username}</td>
					<td>{users.password}</td>
					<td>{users.jabatan}</td>
					<td>{users.gaji+users.tunjangan}</td>
					<td>
						<button className="btn-save-edit" onClick={() => this.detailHandler(index)}>Detail</button>
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
	
	detailHandler = id => {
		const setDetailUser = this.props.setDetailUser
		const user = this.state.userList[id]
		const newData = {
			nik : user.nik,
			name : user.name,
			username : user.username,
			password : user.password,
			jabatan : user.jabatan,
			gaji : user.gaji,
			tunjangan : user.tunjangan 
		}
		setDetailUser(newData)
		this.setPage("detail")
	}  

	editHandler = id => {  
		const setDetailUser = this.props.setDetailUser
		const user = this.state.userList[id]
		const newData = {
			iduser : id,
			nik : user.nik,
			name : user.name,
			username : user.username,
			password : user.password,
			jabatan : user.jabatan,
			gaji : user.gaji,
			tunjangan : user.tunjangan 
		}
		setDetailUser(newData)
		this.setPage("formgaji")

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
							<th>NIK</th>
							<th>Name</th>
							<th>Username</th>
							<th>Password</th>
							<th>Jabatan</th>
							<th>Gaji Total</th>
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