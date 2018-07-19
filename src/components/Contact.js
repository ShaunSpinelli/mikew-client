import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'

class Contact extends React.Component{
    state= {
        fname: '',
        fnameError: '',
        lname: '',
        lnameError: '',
        phone: '',
        phoneError: '',
        email: '',
        emailError: '',
        artist: '',
        comment: '',
        contactButton: false,
        sent: "Send"
    }

    //feel free to add extra validation in this function.
    validate = () => {
        const { email, fname, lname, phone } = this.state
        let isError = false
        const errors = {
            fnameError: '',
            lnameError: '',
            phoneError: '',
            emailError: '',
        }

        if(fname.length <= 1 && isNaN(fname)){
            isError = true
            errors.fnameError = "please enter a valid first name."
        }

        if(lname.length <= 1 && isNaN(lname)){
            isError = true
            errors.lnameError = "please enter a valid last name."
        }

        if(email.indexOf("@") === -1 && email.indexOf(".") === -1 ){
            isError = true
            errors.emailError = "please enter a valid email address"
        }

        if( isNaN(parseInt(phone)) ){
            isError = true
            errors.phoneError = "please enter a valid phone number"
        }

        this.setState ({
            ...this.state,
            ...errors
        })

        return isError
    }

    contactRequest = (e) => {
        const { email, fname, lname, phone, artist, comment } = this.state
        e.preventDefault()

        const err = this.validate()

        //clear form
        if(!err) {
            
            this.setState({sent: "sending"})

            let contactReq = {
                name: `${fname} ${lname}`,
                email: email,
                phone: phone,
                artist: artist,
                comment: comment
                }
                
            this.setState({
                fname: '',
                fnameError: '',
                lname: '',
                lnameError: '',
                phone: '',
                phoneError: '',
                email: '',
                emailError: '',
                artist: '',
                comment: ''
            })

            console.log(contactReq)

            axios.post("https://mikewserver.herokuapp.com/contact/new", contactReq)
            .then(() => this.setState({ sent: "sent!", contactButton: true }))
            .catch((err) => { console.log(err) })

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        const {sent, fname, lname, phone, email, artist, comment, fnameError, lnameError, phoneError, emailError } = this.state
        const {handleChange} = this
        return(
        <div className="contact--holder">
            <MuiThemeProvider>
                <div className = "contact">
                    <div className= "Makebooking--header"> 
                        <p className="Makebooking--headertitle"> Get in Contact Easily </p>
                        <p className="Makebooking--headername">  with Michael Waye </p>
                    </div>
                    <form className = "contact-form">
                        <TextField
                            name= "fname" 
                            floatingLabelText= "first name"
                            value= {fname} 
                            onChange= {handleChange}
                            errorText = {fnameError} />
                        <TextField
                            name= "lname" 
                            floatingLabelText= "last name"
                            value= {lname} 
                            onChange= {handleChange}
                            errorText = {lnameError}  />
                        <TextField
                            name= "phone" 
                            floatingLabelText= "phone"
                            value= {phone} 
                            onChange= {handleChange}
                            errorText = {phoneError}  />
                        <TextField
                            name= "email" 
                            floatingLabelText= "email"
                            value= {email} 
                            onChange= {handleChange}
                            errorText = {emailError} />
                        <TextField 
                            name= "artist" 
                            floatingLabelText= "artist"
                            value= {artist} 
                            onChange= {handleChange} />
                        <TextField 
                            name= "comment" 
                            hintText= "What would you like to talk about?" 
                            floatingLabelText= "comment"
                            value= {comment} 
                            onChange= {handleChange} />
                        <button onClick={this.contactRequest} disabled={this.state.contactButton} className="sendContact"> {sent} </button>
                    </form>
                </div>
            </MuiThemeProvider>
        </div>
        )
    }
}
 
export default Contact