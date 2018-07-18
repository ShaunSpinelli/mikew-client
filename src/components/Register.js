import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
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
            Role: "user",
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
        <Fragment>
            <button className="register--button" onClick={openModal}>Register</button>
            <Modal
                className="modal fade modal-dialog loginmodal-container"
                id="login-modal"
                isOpen={this.state.modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <button  onClick={closeModal}>close</button>
                <h1>Register Your Account</h1><br />
                <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
                <form>
                    <input onChange={handleChange} name="firstName" placeholder="first name" />
                    <input onChange={handleChange} name="lastName" placeholder="last name" />
                    <input onChange={handleChange} name="phoneNumber" placeholder="phone number" />
                    <input onChange={handleChange} type="email" name="email" placeholder="email" />
                    <input onChange={handleChange} type="password" name="password" placeholder="password" />
                    <input onClick={handleRegister} type="submit" name="register" className="login loginmodal-submit" value="Register" />
                </form>
                <div className="login-help">
                    <a href="#">Login</a> - <a href="#">Forgot Password</a>
                </div>
            </Modal>
        </Fragment>
      );
    }
  }

export default Register

