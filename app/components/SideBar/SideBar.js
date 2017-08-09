import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (

            <div className="pane pane-sm sidebar">
                <nav className="nav-group">
                    <span className="nav-group-item" onClick={()=> console.log("OK")}>
                        <span className="icon icon-home"></span>
                        Home
                    </span>
                    <span className="nav-group-item active">
                        <span className="icon icon-cog"></span>
                        Settings
                    </span>
                </nav>
            </div>
        );
    }
}

export default SideBar;