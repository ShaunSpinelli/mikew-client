import React from 'react'

class Contact extends React.Component{
    state= {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        artist: '',
        comment: ''
    }

    contactRequest = (e) => {
        e.preventDefault()
        console.log(
            this.state
        )
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        const {fname, lname, phone, email, artist, comment} = this.state
        const {handleChange} = this
        return(
        <div className = "contact">
            <p> Contact Mike  </p>
            <form>
                <input name= "fname" placeholder= "firstname" value= {fname} onChange= {handleChange}/>
                <input name= "lname" placeholder= "lastname" value= {lname} onChange= {handleChange}/>
                <input name= "phone" placeholder= "phone" value= {phone} onChange= {handleChange}/>
                <input name= "email" placeholder= "email" value= {email} onChange= {handleChange}/>
                <input name= "artist" placeholder= "artist/band name" value= {artist} onChange= {handleChange}/>
                <input name= "comment" placeholder= "What would you like to talk about?" value= {comment} onChange= {handleChange}/>
                <button onClick={this.contactRequest}> send </button>
            </form>
        </div>
        )
    }
}
 
export default Contact;