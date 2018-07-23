import React from 'react'
import axios from 'axios'

class AllContacts extends React.Component {
    state = { 
        allContacts: []
     }

    componentWillMount(){
        axios.get("https://mikewserver.herokuapp.com/contact/all")
        .then((response) => {
            let contactRequests = []
            response.data.forEach((req) => {
                contactRequests.push(req)
            })
            this.setState({ allContacts: contactRequests }, () => console.log(this.state))
        })
        .catch((err) => { console.log(err) })
    }


    render() { 
        return ( 
            <div>
                <p>All Contacts </p>
            <div className="allcontacts--holder">
            {
                this.state.allContacts  ? 
                this.state.allContacts.map((contact) => {
                    return (
                        <div>
                            <div className="contact" key = {contact._id}>  
                                <h1> name: {contact.artist} </h1>
                                <p> artist name: {contact.artist} </p>
                                <p> email: {contact.email} </p>
                                <p> phone: {contact.phone} </p>
                                <p> comment: {contact.comment} </p>
                            </div>
                        </div>
                    )
                })
            : <p> loading hollup.. </p>
            }
            </div>
            </div>
         );
    }
}
 
export default AllContacts;