import React, { Component } from 'react';
import Header from '../../template/header';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userDetail: []
         }
    }

    componentDidMount= () => {
        const userDetail = this.props.userDetail
        this.setState({
            userDetail : userDetail
        })
    }

    renderList = () => {
        console.log("detail",this.props.userDetail)
        console.log("detail",this.state.userDetail)
        const users = this.state.userDetail
			return (
                <>
				<tr>
					<td>NIK</td>
                    <td>   :   </td>
					<td>{users.nik}</td>
				</tr>
                <tr>
                    <td>Nama Karyawan</td>   
                    <td>   :   </td>
					<td>{users.name}</td>
                </tr>
                <tr>
                    <td>Jabatan</td>
                    <td>   :   </td>
					<td>{users.jabatan}</td>
                </tr>
                <tr>
                    <td>Gaji Pokok</td>
                    <td>   :   </td>
					<td>{users.gaji}</td>
                </tr>
                <tr>
                    <td>Tunjangan</td>
                    <td>   :   </td>
                    <td>{users.tunjangan}</td>
                </tr>
                <tr>
                    <td>Total Gaji</td>
                    <td>   :   </td>
                    <td>{users.tunjangan+users.tunjangan}</td>
                </tr>
                </>
			)
	}

    render() { 
        const setPage = this.props.setPage
        const userDetail = this.props.userDetail
        return ( 
        <>
			<Header setPage={setPage} userDetail={userDetail}/>
            <div className="main">
                <h1>Detail Karyawan</h1>
                <div className="thishome">
                <table>
                    <thead></thead>
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
 
export default Detail;