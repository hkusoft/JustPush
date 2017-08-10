import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SettingScreen from '../../routes/SettingScreen'
import HomeScreen from '../../routes/HomeScreen'
import PasswordDialog from '../../routes/PasswordDialog'

// const { electron } = require('electron')
// var ipc= electron.ipcRenderer;
// ipc.on('OnCorrectPassword', _ =>{
//     console.log("Correct password");
// });

class SideBar extends Component {
    constructor() {
        super();
        this.activeScreen = 'Home';
    }

    switchToHomeScreen() {
        this.activeScreen = 'Home';
        ReactDOM.render(
            <HomeScreen/>, document.getElementById("content"));
        this.forceUpdate();
    }

    openPasswordDialog() {
        ReactDOM.render(
            <PasswordDialog ref={(dlg) => {
            this.passwordDlg = dlg;
        }}/>, document.getElementById("content"));

        this.passwordDlg.show();
    }

    switchToSettingScreen() {
        this.activeScreen = 'Settings';
        ReactDOM.render(
            <SettingScreen/>, document.getElementById("content"));
        this.forceUpdate();
    }

    isActive(name) {
        return this.activeScreen === name
            ? "nav-group-item active"
            : "nav-group-item";
    }

    render() {
        return (
            <nav className="nav-group">
                {/* Home */}
                <span
                    className={this.isActive('Home')}
                    onClick={_ => this.switchToHomeScreen()}>
                    <span className="icon icon-home"></span>
                    Home
                </span>
                {/* Settings */}
                <span className={this.isActive('Settings')} onClick={_ => this.openPasswordDialog()}>
                    <span className="icon icon-cog"></span>
                    Settings
                </span>
            </nav>

        );
    }
}

export default SideBar;