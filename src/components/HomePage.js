import React, {Fragment} from 'react'
import Map from './Map'
import Testimonies from './Testimonies.js'
import Footer from './Footer.js'
import { Title, Subtitle, Slogan, Home, Icon1, Icon2, Img } from '../styles/cssInJs/HomePage.styles';
import michael from '../images/michael.jpg'


const HomePage = () => (
    <Fragment>
        <Home className= "homepage--holder">
            <Img src={michael} alt="Photo of Michael Waye"></Img>
            <Title>Michael Waye</Title>
            <Subtitle> MUSIC PRODUCTION </Subtitle>
            <Slogan> Professional Production Assistance <br /> Consultancy, Producing Quality Music & Technical Help </ Slogan>
            <Icon1 src="http://icons.iconarchive.com/icons/xenatt/minimalism/256/App-SoundCloud-icon.png" alt="soundcloud logo" />
            <Icon2 src="https://www.shareicon.net/data/256x256/2015/08/29/92757_like_606x606.png" alt="facebook logo"/>
        </ Home>
            <p id= "testimonies"></p>
        <Testimonies />
        <Map />
    </ Fragment>
)
 
export default HomePage;