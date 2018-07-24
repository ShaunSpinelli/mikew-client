import React from 'react'
import axios from 'axios'

class AllContacts extends React.Component {
    state = { 
        allContacts: [] //filled by ajax request.
     }

    componentWillMount(){
        axios.get("https://mikewserver.herokuapp.com/contact/all") //gets all contact
        .then((response) => {
            let contactRequests = []
            response.data.forEach((req) => {
                contactRequests.push(req) //pushes into contactRequest which is then assigned to the allContacts state.
            })
            this.setState({ allContacts: contactRequests }, () => console.log(this.state))
        })
        .catch((err) => { console.log(err) })
    }

    render() { 
        return ( 
            <div>
                <div className="allcontacts--holder">
                {
                    this.state.allContacts  ?  //only display if contacts exists, otherwise show laoding.
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