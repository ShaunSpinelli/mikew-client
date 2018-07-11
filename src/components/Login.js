import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#yourAppElement')

class Login extends Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal 
          className="loginmodal-container"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <div className="loginmodal-container">
          <h1>Login to Your Account</h1>
          <form>
            <input type="text" />
            <input type="password"/>
            <input type="submit" name="login" class="login loginmodal-submit" value="Login" />          
          </form>
          <div class="login-help">
            <a href="#">Register</a> - <a href="#">Forgot Password</a>
          </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Login;

{/* <div class="login-btn">
<a href="#" class="button" data-toggle="modal" data-target="#login-modal">Login</a>
</div>

<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    	  <div class="modal-dialog">
				{/* <div class="loginmodal-container">
					<h1>Login to Your Account</h1><br>
				  <form>
					<input type="text" name="user" placeholder="Username">
					<input type="password" name="pass" placeholder="Password">
					<input type="submit" name="login" class="login loginmodal-submit" value="Login">
				  </form>
					
				  <div class="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
				  </div> */}
		// 		</div>
		// 	</div>
		//   </div> */}