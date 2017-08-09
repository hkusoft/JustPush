import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (

            <div className="pane pane-sm sidebar">
                <nav className="nav-group">
                    <span className="nav-group-item">
                        <span className="icon icon-home"></span>
                        connors
                    </span>
                    <span className="nav-group-item active">
                        <span className="icon icon-light-up"></span>
                        Photon
                    </span>
                </nav>
            </div>
        );
    }
}

export default SideBar;