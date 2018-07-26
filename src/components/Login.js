import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { NavButton } from '../styles/cssInJs/Nav.styles';
import { theme } from '../styles/cssInJs/Mixins.styles';
import { api } from '../api/init'

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#app')
   
  class Login extends Component {
    state = {
      modalIsOpen: false,
      email: '',
      password: '',
      loginError: false,
      loginButton: 'Login'
    }
   
    openModal = () => {
      this.setState({modalIsOpen: true})
    }
   
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value }) //changes state corressponding to inputs name attribute.
    }

    handleLogin = (e) =>{
      this.setState({loginButton: "logging in..."})
      e.preventDefault() //prevents page refresh.
      
      api.post('users/login',{email: this.state.email, password:this.state.password}) //posts this to server
      .then(res => { localStorage.setItem('token',res.data.token)
      this.props.updatedLogIn()
      this.closeModal()})
      .catch(err => this.setState({loginError: true}))
    }

    closeModal = (e) => {
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <MuiThemeProvider theme={theme}>
        <Fragment>
          <NavButton onClick={this.openModal}>Login</ NavButton>
          <Modal
            className="modal fade modal-dialog loginmodal-container"
            id="login-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <button  className="close--button" onClick={this.closeModal}> 
              <img className="close--button--img"  src="https://res.cloudinary.com/shaundev/image/upload/v1532582666/faef.png" /> 
            </button>
            <h1> Login </h1>
            <br/>
            <p>{this.state.loginError ? 'Invalid Login Details': ''}</p>
            <div>
              <form className="login--form--container"> 
                <p>
                  <TextField
                      className="center--login--inputs"
                      placeholder="email"
                      name= "email" 
                      floatingLabelText= "email"
                      value= {this.state.email} 
                      onChange= {this.handleChange} />
                </p>
                <p>
                  <TextField
                      className="center--login--inputs"
                      placeholder="password"
                      name= "password" 
                      floatingLabelText= "password"
                      value= {this.state.password} 
                      onChange= {this.handleChange}
                      type="password" />
                  </p>
                <button onClick={this.handleLogin} type="submit" name="login" className="Makebooking--button"> {this.state.loginButton} </button>
              </form>
            </div>
            {/* <div className="login-help">
              <a href="#">Register</a> - <a href="#">Forgot Password</a>
            </div> */}
          </Modal>
        </ Fragment>
        </ MuiThemeProvider>
      );
    }
  }

export default Login

