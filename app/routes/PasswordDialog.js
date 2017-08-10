import React, {Component} from 'react';
import Modal from 'react-modal';
// import electron from 'electron';

// const  ipc = electron.ipcRenderer;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
class PasswordDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            isPasswordWrong: false
        }
    }

    show() {
        this.setState({isOpen: true, isPasswordWrong: false});
    }
    hide() {
        this.setState({isOpen: false, isPasswordWrong: false});

    }
    onDialogRequestClose() {
        console.log("Request close");
    }

    onOkClicked() {
        var password = this.passwordInput.value;
        if (password === 'dch') {
            this.setState({isOpen: false});
            this.props.onCorrectPassword();
        } else {
            this.setState({isPasswordWrong: true});
        }

    }
    // onAfterOpen={afterOpenFn} onRequestClose={requestCloseFn}
    render() {
        return (
            <Modal
                isOpen={this.state.isOpen}
                contentLabel="Modal"
                style={customStyles}
                onRequestClose={this.onDialogRequestClose}>
                <h2>Enter your password:</h2>
                <input
                    className="form-control uk-margin-small"
                    type="password"
                    style={this.stretch}
                    ref={(input) => {
                    this.passwordInput = input;
                }}/>

                <div>
                    {/* {this.state.isPasswordWrong}? */}
                    <h5 className="uk-text-danger">Incorrect password, please retry ...</h5>
                    {/* : null */}
                </div>

                <div>
                    <button
                        className="uk-button uk-button-primary uk-width-1-2" type="submit"
                        onClick={_ => this.onOkClicked()}>OK</button>
                    <button
                        className="uk-button uk-button-secondary uk-width-1-2"
                        onClick={_ => this.onOkClicked()}>Cancel</button>
                </div>
            </Modal>
        );
    }
}

export default PasswordDialog;