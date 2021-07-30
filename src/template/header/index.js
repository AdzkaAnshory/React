import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // renderPage = () => {
        // const setPage = this.props.setPage
    //     console.log("jabatan ",this.props);
    //     if(this.props.userDetail.jabatan === "Karyawan"){
    //         return (<div className="thishome">
    //                     <div className="logout">
    //                         <button className="button button5" onClick={() => setPage("login")}>Logout</button>
    //                     </div>
    //                 </div>)
    //     }
    //     return (<div className="thishome">
    //                 <div className="logout">
    //                     <button className="button button5" onClick={() => setPage("home")}>Home</button>
    //                     <button className="button button5" onClick={() => setPage("login")}>Logout</button>
    //                 </div>
    //             </div>)
    // }

    render() {
        const setPage = this.props.setPage
        return (
            <div>
                <div className="thishome">
                     <div className="logout">
                        <button className="button button5" onClick={() => setPage("home")}>Home</button>
                        <button className="button button5" onClick={() => setPage("login")}>Logout</button>
                     </div>
                 </div>
                {/* {this.renderPage()} */}
            </div>
        );
    }
}

export default Header;