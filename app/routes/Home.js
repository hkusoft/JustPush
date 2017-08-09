import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/SideBar';

class Home extends Component {
    render() {
        return (
            <div>
                <SideBar />                
            </div>
        );
    };
}
ReactDOM.render(<Home />, document.getElementById("content"));
export default Home;