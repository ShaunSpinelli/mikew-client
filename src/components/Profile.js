import React, { Component, Fragment } from 'react'
import { api } from '../api/init'
import Loading from './Loading'
import TextField from 'material-ui/TextField'

const jwtDecode = require('jwt-decode')

class Profile extends Component {
    state = {
        loading: false,
        id: "",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        profileImg:""
    }

    componentDidMount(){
        this.setState( {loading: true} )
        const decoded = jwtDecode(localStorage.getItem('token'))
        this.getUserProfile(decoded.sub)
    }

    getUserProfile = (id) => {
        api.get("users/id", {params : {id: id }})
        .then((response) => {
        const {id, firstName, lastName, email, phoneNumber, profileImg} = response.data
        this.setState(
            {id, firstName, lastName, email, phoneNumber, profileImg, loading: false })})
        // console.log(res.data.firstName)})
        .catch((err) => { console.log(err) })
        }

    render () {
        const { loading, firstName, lastName, email, phoneNumber, profileImg } = this.state
        const fullName = `${firstName} ${lastName}`
        { if(loading) {return <Loading className = "loadingScreen" /> }}
        return (
            <div className="profile--holder">
                <div className="profile">
                    <img className="profilepic" src="https://eadb.org/wp-content/uploads/2015/08/profile-placeholder-300x300.jpg" />
                    <h1 className="profile--title"> {fullName} </h1>
                    <p className="profile">Email: { email } </p>
                    <p>Phone: { phoneNumber } </p>
                </div>
            </div>
        )
    }

}

export default Profile;