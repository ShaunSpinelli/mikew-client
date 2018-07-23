import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Button } from '../styles/Nav.styles';
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
            this.closeModal()})
        .catch(err => {this.setState({loginError: true})})
    }

    render() {
      return (
        <MuiThemeProvider>
        <Fragment>
            <Button onClick={this.openModal}>Register</ Button>
            <Modal
                className="modal fade modal-dialog loginmodal-container"
                id="login-modal"
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
            >
            <button  className="close--button" onClick={this.closeModal}> <img className="close--button--img"  src="http://www.myiconfinder.com/uploads/iconsets/256-256-46602df56c953c27348b14d8651dcdc5-close.png" /> </button>
                <h1>Register Your Account</h1><br />
                <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
                <form className="login--form--container">
                <p>
                <TextField
                    className="center--login--inputs"
                    name= "firstName" 
                    floatingLabelText= "first name"
                    value= {this.state.firstName} 
                    onChange= {this.handleChange} />
                </p>
                <p>
                <TextField
                    className="center--login--inputs"
                    name= "lastName" 
                    floatingLabelText= "last name"
                    value= {this.state.lastName} 
                    onChange= {this.handleChange} />
                </p>
                <p>
                <TextField
                    className="center--login--inputs"
                    name= "phoneNumber" 
                    floatingLabelText= "phone number"
                    value= {this.state.phoneNumber} 
                    onChange= {this.handleChange} />
                </p>
                <p>
                <TextField
                    className="center--login--inputs"
                    name= "email" 
                    floatingLabelText= "email"
                    value= {this.state.email} 
                    onChange= {this.handleChange} />
                </p>
                <p>
                <TextField
                    className="center--login--inputs"
                    name= "password" 
                    floatingLabelText= "password"
                    value= {this.state.password} 
                    onChange= {this.handleChange} 
                    type= "password"/>   
                </p>
                <button onClick={this.handleRegister} type="submit" name="login" className="Makebooking--button"> Register </button>                 
                </form>

            </Modal>
        </Fragment>
        </MuiThemeProvider>
      );
    }
  }

export default Register

