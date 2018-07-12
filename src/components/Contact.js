import React from 'react';

class Contact extends React.Component{

    contactRequest = () => {
        console.log('hello')
    }

    render(){
        return(
        <div className = "contact">
            <p> Contact Mike  </p>
            <input placeholder = "firstname" />
            <input placeholder = "lastname" />
            <input placeholder = "phone" />
            <input placeholder = "artist/band name" />
            <input placeholder = "What would you like to talk about?" />
            <button onClick={this.contactRequest}> send </button>
        </div>
        )
    }
}
 
export default Contact;