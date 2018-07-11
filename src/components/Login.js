import React, {Component, Fragment} from 'react'
import Modal from 'react-modal'
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('#yourAppElement')
   
  class Login extends Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   this.subtitle.style.color = '#f00';
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <div>
          <button className="button login-btn" onClick={this.openModal}>Login</button>
          <Modal
            className="modal fade modal-dialog loginmodal-container"
            id="login-modal"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
   
            <button  onClick={this.closeModal}>close</button>
            {/* <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;"> */}
            {/* <div className="modal-dialog"> */}
            {/* <div className="loginmodal-container"> */}
					<h1>Login to Your Account</h1><br />
            <form>
					<input type="text" name="user" placeholder="Username" />
					<input type="password" name="pass" placeholder="Password" />
					<input type="submit" name="login" class="login loginmodal-submit" value="Login" />
            </form>
            <div className="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
            </div>
            {/* </div>
            </div> */}
            {/* </div> */}
          </Modal>
        </div>
      );
    }
  }



{/* <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    	  <div class="modal-dialog">
				<div class="loginmodal-container">
					<h1>Login to Your Account</h1><br>
				  <form>
					<input type="text" name="user" placeholder="Username">
					<input type="password" name="pass" placeholder="Password">
					<input type="submit" name="login" class="login loginmodal-submit" value="Login">
				  </form>
					
				  <div class="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
				  </div>
				</div>
			</div>
		  </div>  */}

export default Login;