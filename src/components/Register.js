import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { NavButton } from '../styles/cssInJs/Nav.styles'
import { api } from '../api/init'
import { theme } from '../styles/cssInJs/Mixins.styles';

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
      modalIsOpen: false,
      registerButton: 'Register'
    }
   
    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = (e) => {
        this.setState({modalIsOpen: false});
    }
   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //changes state corressponding to inputs name attribute.
    }

    handleRegister = (e) =>{
        const {firstName, lastName, email, phoneNumber, password } = this.state
        this.setState({registerButton: "Registering.." })
        e.preventDefault() //prevents page refresh.
        let newUser = { //posts this to server
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
            this.closeModal()
        })
        .catch(err => {this.setState({registerError: true})})
    }

    render() {
      return (
        <MuiThemeProvider theme={theme}>
            <Fragment>
                <NavButton onClick={this.openModal}>Register</ NavButton>
                <Modal
                    className="modal fade modal-dialog loginmodal-container"
                    id="login-modal"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >
                    <button  className="close--button" onClick={this.closeModal}> <img className="close--button--img"  src="https://res.cloudinary.com/shaundev/image/upload/v1532582666/faef.png" /> </button>
                    <h1>Register Your Account</h1><br />
                    <p>{this.state.loginError ? 'This email address already exists': ''}</p>
                    <form className="login--form--container">
                        <p>
                            <TextField
                                className="center--login--inputs"
                                name= "firstName" 
                                placeholder= "first name"
                                value= {this.state.firstName} 
                                onChange= {this.handleChange} 
                            />
                        </p>
                        <p>
                            <TextField
                                className="center--login--inputs"
                                name= "lastName" 
                                placeholder= "last name"
                                value= {this.state.lastName} 
                                onChange= {this.handleChange}
                            />
                        </p>
                        <p>
                            <TextField
                                className="center--login--inputs"
                                name= "phoneNumber" 
                                placeholder= "phone number"
                                value= {this.state.phoneNumber} 
                                onChange= {this.handleChange} 
                            />
                        </p>
                        <p>
                            <TextField
                                className="center--login--inputs"
                                name= "email" 
                                placeholder= "email"
                                value= {this.state.email} 
                                onChange= {this.handleChange} 
                            />
                        </p>
                        <p>
                            <TextField
                                className="center--login--inputs"
                                name= "password" 
                                placeholder= "password"
                                value= {this.state.password} 
                                onChange= {this.handleChange} 
                                type= "password"
                            />   
                        </p>
                        <button onClick={this.handleRegister} type="submit" name="login" className="Makebooking--button"> {this.state.registerButton} </button>                 
                    </form>
                </Modal>
            </Fragment>
        </MuiThemeProvider>
      )
    }
}

export default Register

