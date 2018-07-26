import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { BodyText, Para, MapFrame } from '../styles/cssInJs/Map.styles'

const Mapping = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZnJhc2VyaXNsYW5kIiwiYSI6ImNqanJ0YjdydzAxMzMzcG9zZzNydDR3NGsifQ.HGp2D9BXVgnAFIO1miIcXA"
  }) //accessToken, using mapbox, no need to hide as there is no limit to requests.

class Map extends Component {
    render() { 
        return ( 
            <MapFrame>
                <div className="Map--frame">  
                    <Mapping
                        zoom={[15]} //how far it is viewed from
                        center=  {[152.953761,-27.492133]} //where the center of the map will point
                        style="mapbox://styles/mapbox/navigation-preview-night-v3" //pre-defined map theme
                        containerStyle={{
                            height: "40vh",
                            width: "50vw",
                    }}>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                            <Feature coordinates={[152.953761,-27.492133]}/>{/* makes a land makr at his house. */}
                        </Layer>
                    </Mapping>
                </div>
                <BodyText>
                    <Para> All production appointments will be received at my home office. 
                    My studio has everything needed to produce professional music </ Para>
                    <Para> <img className="Map--Icon" src="http://www.myiconfinder.com/uploads/iconsets/256-256-35be70cfc8168446fdd9c9803ea9f6a1.png" alt="map icon"/>
                    Address: 1 Pilin Place, Chapel Hill, Queensland </ Para> 
                    <Para> <img className="Map--Icon" src="http://www.thamesriverservices.co.uk/assets/address.png" alt="address icon"/> 
                    Postal Address: PO Box 93 </ Para>
                    <Para> <img className="Map--Icon" src="https://png.icons8.com/cotton/2x/secured-letter.png" alt="email icon"/>
                    Email: michael.s.waye@gmail.com  </ Para>
                    <Para> <img className="Map--Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/phone-icon.png" alt="phone icon"/>
                    Phone: 0488 768 864 </ Para>
                </ BodyText>
            </ MapFrame>
        )
    }
}
 
export default Map