import React, {Fragment} from 'react'
import Map from './Map'
import Testimonies from './Testimonies.js'
import Footer from './Footer.js'
import { Title, Subtitle, Slogan, Home, Icon } from './HomePage.styles';


const HomePage = () => (
    <Fragment>
        <Home>
            <Title>Michael Waye</Title>
            <Subtitle> MUSIC PRODUCTION </Subtitle>
            <Slogan> Professional Producing Assistance <br />
                Consultancy, Producing Quality Music & Technical Help </ Slogan>
                <Icon src="http://icons.iconarchive.com/icons/xenatt/minimalism/256/App-SoundCloud-icon.png" alt="soundcload logo" />
                <Icon src="https://www.shareicon.net/data/256x256/2015/08/29/92757_like_606x606.png" alt="facebook logo"/>
        </ Home>
        <Testimonies />
        <Map />
    </ Fragment>
)
 
export default HomePage;