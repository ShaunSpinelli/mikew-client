import React, { Component, Fragment } from 'react'
import { api } from '../api/init'
import Loading from './Loading'
import { Title, Subtitle } from '../styles/cssInJs/Mixins.styles';
import { Name, Img } from '../styles/cssInJs/Profile.styles';


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
        this.getUserProfile(decoded.sub) //decoded.sub is users unique ID, uses it to make an axios request for the specific user.
    }

    getUserProfile = (id) => {
        api.get("users/id", {params : {id: id }}) //only returns information relevent to the user.
        .then((response) => {
        const {id, firstName, lastName, email, phoneNumber, profileImg} = response.data //decontructind for response.
        this.setState(
            {id, firstName, lastName, email, phoneNumber, profileImg, loading: false })})
        // console.log(res.data.firstName)})
        .catch((err) => { console.log(err) })
        }

    render () {
        const { loading, firstName, lastName, email, phoneNumber, profileImg } = this.state
        const fullName = `${firstName} ${lastName}` //formats for readability.
        { if(loading) {return <Loading className = "loadingScreen" /> }} //finishes loading once axios responser recieved.
        return (
            <div className="profile--holder">
                <div className="profile">
                    <Img src="https://eadb.org/wp-content/uploads/2015/08/profile-placeholder-300x300.jpg" />
                    <Name> { fullName } </Name>
                    <div className="profile--details--holder">
                        <span className="profile--details"> <img className="Map--Icon" src="https://png.icons8.com/cotton/2x/secured-letter.png"/> { email } </span>
                        <span className="profile--details"> <img className="Map--Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/phone-icon.png"/> { phoneNumber } </span>
                        <span className="profile--details"> <img className="Map--Icon" src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-512.png"/> Edit Details </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;