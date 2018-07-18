import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import { api } from '../api/init'

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#app')
   
  class Login extends Component {
    state = {
      modalIsOpen: false,
      email: '',
      password: '',
      loginError: false
    }
   
    openModal = () => {
      this.setState({modalIsOpen: true});
    }
   
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    // on form submit run this function

    handleLogin = (e) =>{
      e.preventDefault()
      
      api.post('users/login',{email: this.state.email, password:this.state.password})
      .then(res => { localStorage.setItem('token',res.data.token)
      this.props.updatedLogIn()
      this.closeModal()})
      .catch(err => this.setState({loginError: true}))

      //if login axios comes back with jwt then save token in storage and set modal is open to false
      // else login comes back with error prompt for another login with message, maybe at a msg to the state
      // this.setState({modalIsOpen: false});
      
    }

    closeModal = (e) => {
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <Fragment>
          <button className="login--button" onClick={this.openModal}>Login</button>
          <Modal
            className="modal fade modal-dialog loginmodal-container"
            id="login-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
   
          <button  onClick={this.closeModal}>close</button>
					<h1>Login to Your Account</h1><br />
          <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
          <form>
					  <input onChange={this.handleChange} type="text" name="username" placeholder="Username" />
					  <input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
				  	<input onClick={this.handleLogin} type="submit" name="login" className="login loginmodal-submit" value="Login" />
          </form>
          <div className="login-help">
					  <a href="#">Register</a> - <a href="#">Forgot Password</a>
          </div>
          </Modal>
        </ Fragment>
      );
    }
  }

export default Login

