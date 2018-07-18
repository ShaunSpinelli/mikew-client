import React from 'react'
import {api} from '../api/init.js'

class AllUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            allUsers: []
         }
    }

    componentDidMount() {
        api.get('users/all')
        .then((response) => {
            console.log(response.data) 
            this.setState({allUsers: response.data})
        })
        .catch((err) => {console.log(err)})
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
                                <button> remove user </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default AllUsers;