import React, { Component, Fragment } from 'react'
import { api } from '../api/init'
import Loading from './Loading'

const jwtDecode = require('jwt-decode')

class Profile extends Component {
    state = {
        loading: false,
        id:''
    }

    componentDidMount(){
        this.setState( {loading: true} )
        const decoded = jwtDecode(localStorage.getItem('token'))
        this.getUserProfile(decoded.sub)
        console.log(decoded.sub)
    }

    getUserProfile = (id) => {
        api.get("users/id", {id: 'zz5b4ecaab3d9c6d403c1ea730' })
        .then((response) => {
            console.log(response)
        this.setState({ id, loading: false }) })
        .catch((err) => { console.log(err) })
        }

    render () {
        const { loading } = this.state
        { if(loading) {return <Loading className = "loadingScreen" /> }}
        return (
            <Fragment>
                <p>Hello</p>
            </Fragment>
        )
    }

}



export default Profile;