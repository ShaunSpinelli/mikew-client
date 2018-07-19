import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { api } from '../api/init'

  class Register extends Component {
    state = {
      firstName: '',
      lastName: '', 
      email: '',
      phoneNumber: '',
      password: '',
      role: 'user',
      profileImg: 'url',
      registerError: false,
      modalIsOpen: false
    }
   
    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = (e) => {
        this.setState({modalIsOpen: false});
    }
   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegister = (e) =>{
        const {firstName, lastName, email, phoneNumber, password } = this.state
        e.preventDefault()
        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            role: "user",
            profileImg: "url"
        }
        api.post('users/register', newUser)
        .then(res => { localStorage.setItem('token',res.data.token)
            this.props.updatedLogIn()
            this.closeModal()})
        .catch(err => this.setState({loginError: true}))
    }

    render() {
        const { openModal, closeModal, handleChange, handleRegister } = this
      return (
        <MuiThemeProvider>
        <Fragment>
            <button className="register--button" onClick={openModal}>Register</button>
            <Modal
                className="modal fade modal-dialog loginmodal-container"
                id="login-modal"
                isOpen={this.state.modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
            <button  className="close--button" onClick={this.closeModal}> <img className="close--button--img"  src="http://www.myiconfinder.com/uploads/iconsets/256-256-46602df56c953c27348b14d8651dcdc5-close.png" /> </button>
                <h1>Register Your Account</h1><br />
                <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
                <form className="login--form--container">
                <TextField
                    name= "firstName" 
                    floatingLabelText= "first name"
                    value= {this.state.firstName} 
                    onChange= {this.handleChange} />
                <TextField
                    name= "lastName" 
                    floatingLabelText= "last name"
                    value= {this.state.lastName} 
                    onChange= {this.handleChange} />
                <TextField
                    name= "phoneNumber" 
                    floatingLabelText= "phone number"
                    value= {this.state.phoneNumber} 
                    onChange= {this.handleChange} />
                <TextField
                    name= "email" 
                    floatingLabelText= "email"
                    value= {this.state.email} 
                    onChange= {this.handleChange} />
                <TextField
                    name= "password" 
                    floatingLabelText= "password"
                    value= {this.state.password} 
                    onChange= {this.handleChange} 
                    type= "password"/>   
                <button onClick={this.handleLogin} type="submit" name="login" className="Makebooking--button"> Register </button>                 
                </form>
                <div className="login-help">
                    <a href="#">Login</a> - <a href="#">Forgot Password</a>
                </div>
            </Modal>
        </Fragment>
        </MuiThemeProvider>
      );
    }
  }

export default Register

