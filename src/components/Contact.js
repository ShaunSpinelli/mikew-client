import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Title, Subtitle } from '../styles/Mixins.styles';
import { ContactForm } from '../styles/Contact.styles';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
        contactButton: false, //if true, no contact request can be sent.
        sent: "Send", //changes depending on axios request status, "sending, or "sent""
        isAuthenticated: false //if true, they will be redirected after the contact request is sent.
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

        if(fname.length <= 1 && isNaN(fname)){ //checks firstname field for numbers and length
            isError = true
            errors.fnameError = "please enter a valid first name."
        }

        if(lname.length <= 1 && isNaN(lname)){ //checks lastname field for numbers and length
            isError = true
            errors.lnameError = "please enter a valid last name."
        }

        if(email.indexOf("@") === -1 && email.indexOf(".") === -1 ){ //checks email feild for @ and .
            isError = true
            errors.emailError = "please enter a valid email address"
        }

        if( isNaN(parseInt(phone)) ){ //checks phone number field is a number
            isError = true
            errors.phoneError = "please enter a valid phone number"
        }

        this.setState ({ //sets error state if error is present.
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
            .then(() => this.setState({ sent: "sent!", contactButton: true, isAuthenticated: true }))
            .catch((err) => { console.log(err) })

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        const {sent, fname, lname, phone, email, artist, comment, fnameError, lnameError, phoneError, emailError, isAuthenticated } = this.state
        const {handleChange} = this
        if (isAuthenticated) {
            return <Redirect to='/' />
        }
        return(
        <ContactForm>
            <MuiThemeProvider>
                <div>
                        <Title> Get in Contact Easily </Title>
                        <Subtitle>  with Michael Waye </Subtitle>
                    <div className="contact--form--container">
                    <form className = "contact-form">
                    <p>
                        <TextField
                            name= "fname" 
                            floatingLabelText= "first name"
                            value= {fname} 
                            onChange= {handleChange}
                            errorText = {fnameError} />
                    </p>
                    <p>
                        <TextField
                            name= "lname" 
                            floatingLabelText= "last name"
                            value= {lname} 
                            onChange= {handleChange}
                            errorText = {lnameError}  />
                    </p>
                    <p>
                            <TextField
                            name= "phone" 
                            floatingLabelText= "phone"
                            value= {phone} 
                            onChange= {handleChange}
                            errorText = {phoneError}  />
                    </p>
                    <p>
                        <TextField
                            name= "email" 
                            floatingLabelText= "email"
                            value= {email} 
                            onChange= {handleChange}
                            errorText = {emailError} />
                    </p>
                    <p>
                        <TextField 
                            name= "artist" 
                            floatingLabelText= "artist"
                            value= {artist} 
                            onChange= {handleChange} />
                    </p>
                    <p>
                        <TextField 
                            name= "comment" 
                            hintText= "What would you like to talk about?" 
                            floatingLabelText= "comment"
                            value= {comment} 
                            onChange= {handleChange} />
                    </p>
                    </form>
                    </div>
                    <button onClick={this.contactRequest} disabled={this.state.contactButton} className="sendContact"> {sent} </button>
                </div>
            </MuiThemeProvider>
        </ContactForm>
        )
    }
}
 
export default Contact