import React from 'react'
import TextField from 'material-ui/TextField'
import { MuiThemeProvider } from 'material-ui/styles'
import { theme, Title, Subtitle } from '../styles/cssInJs/Mixins.styles';
import { ContactForm } from '../styles/cssInJs/Contact.styles';
import {api} from '../api/init.js'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

let local = {}

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

    

    componentDidMount(){
        if(localStorage.getItem('contactForm')){
            local = (JSON.parse(localStorage.getItem('contactForm')))
            console.log(JSON.parse(localStorage.getItem('contactForm')))
            this.setState({
                fname: local.fname,
                lname: local.lname,
                phone: local.phone,
                email: local.email,
                artist: local.artist,
                comment: local.comment
            })
        }
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

        if(fname === ''){ //checks firstname field for numbers and length
            isError = true
            errors.fnameError = "please enter a valid first name."
        }

        if(lname === '' ){ //checks lastname field for numbers and length
            isError = true
            errors.lnameError = "please enter a valid last name."
        }
        
        if(email === ''){ 
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
        console.log('contact request called')
        const { email, fname, lname, phone, artist, comment } = this.state
        e.preventDefault()
        const err = this.validate()

        //clear form
        if(!err) { //checks for error
            console.log('contact request no errors.')
            this.setState({sent: "sending"})

            let contactReq = { //defines what is sent to the server, only does this if no errors.
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

            localStorage.removeItem('contactForm')

            
            api.post("/contact/new", contactReq)
            .then((contact) => {
                this.setState({ sent: "sent!", contactButton: true, isAuthenticated: true })
                console.log(contact.data) })//redirects if successful( is Authenticated )
            .catch((err) => { console.log(err) })
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }) //inputs name will be set to corresponding value, state, and name are the same.
        local[e.target.name] =  e.target.value
        localStorage.setItem('contactForm', JSON.stringify(local))
    }

    render(){
        const { sent, fname, lname, phone, email, artist, comment, fnameError, lnameError, phoneError, emailError, isAuthenticated } = this.state
        const { handleChange } = this
        if (isAuthenticated) { //set to true after contact req is sent
            return <Redirect to='/' /> 
        }
        return(
            <ContactForm>
                <MuiThemeProvider theme={theme}> 
                    <div className="contact--holder">
                        <Title> Get in Contact Easily </Title>
                        <Subtitle>  with Michael Waye </Subtitle>
                        <div className="contact--form--container">
                            <form className = "contact-form">
                                <p>
                                    <TextField
                                        name= "fname" 
                                        placeholder="first name"
                                        value= {fname} 
                                        onChange= {handleChange}
                                        errorText = {fnameError} 
                                        inputStyle = {{color: 'white'}}
                                        />
                                </p>
                                <p>
                                    <TextField
                                        name= "lname" 
                                        placeholder="last name"
                                        floatingLabelText= "last name"
                                        value= {lname} 
                                        onChange= {handleChange}
                                        errorText = {lnameError}  />
                                </p>
                                <p>
                                        <TextField
                                        name= "phone" 
                                        placeholder="phone"
                                        floatingLabelText= "phone"
                                        value= {phone} 
                                        onChange= {handleChange}
                                        errorText = {phoneError}  />
                                </p>
                                <p>
                                    <TextField
                                        name= "email" 
                                        placeholder="email"
                                        floatingLabelText= "email"
                                        value= {email} 
                                        onChange= {handleChange}
                                        errorText = {emailError}
                                         />
                                </p>
                                <p>
                                    <TextField 
                                        name= "artist" 
                                        placeholder="artist"
                                        value= {artist} 
                                        onChange= {handleChange}
                                        />
                                </p>
                                <p>
                                    <TextField 
                                        placeholder= "comment"
                                        name= "comment" 
                                        value= {comment} 
                                        onChange= {handleChange} 
                                        />
                                </p>
                            </form>
                        </div>
                        <button onClick={this.contactRequest} disabled={this.state.contactButton} className="sendContact"> {sent} </button> {/* button text changes depending on sent state. */}
                    </div>
                </MuiThemeProvider>
            </ContactForm>
        )
    }
}
 
export default Contact