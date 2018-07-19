import React, { Component } from 'react'

const jwtDecode = require('jwt-decode')
jwtDecode(localStorage.getItem('token'))


const Profile = () => {
    return (
        <p>My profile</p>
    )
}

export default Profile;