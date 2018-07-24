import React from 'react'
import {api} from '../api/init.js'

class AllUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            allUsers: []
        }
    }

    componentDidMount() { //fetches all user accounts.
        api.get('users/all')
        .then((response) => {
            this.setState({allUsers: response.data}) //sets response to state.
        })
        .catch((err) => {console.log(err)})
    }

    //MVP +, not implemented yet.
    removeUser = (id) => {
        console.log('remove!' + id)
    }

    render() { 
        return ( 
            <div>
                <h1> All Users </h1>
                {
                    this.state.allUsers.map((user) => {
                        return (
                            <div key= {user._id}>
                                <p> {`${user.firstName} ${user.lastName}`} </p>
                                <p> {`${user.email}`} </p>
                                <p> {`${user.phoneNumber}`} </p>
                                <button onClick={() => this.removeUser(user._id)}> remove user </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default AllUsers;