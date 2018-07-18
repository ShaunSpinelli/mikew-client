import React from 'react'

class Map extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="Map">
                <div className="Map--frame">  
                    <img src="https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg" />
                </div>
                <div className="Map--info">
                    <p> All producing enquires will be recieved at my home office. </p>
                    <p> My studio has everything needed to produce proffesional music </p>
                    <div>
                        <p> <img className="Map--Icon" src="http://www.myiconfinder.com/uploads/iconsets/256-256-35be70cfc8168446fdd9c9803ea9f6a1.png"/>
                         Address:  Elizabeth Drive, Rosebud, Victoria 3939 </p>
                    </div>
                    <p> <img className="Map--Icon" src="http://www.thamesriverservices.co.uk/assets/address.png"/> 
                        Postal Address: PO Box 93 </p>
                    <p> <img className="Map--Icon" src="https://png.icons8.com/cotton/2x/secured-letter.png"/>
                        MikeOxlong@gmail.com </p>
                    <p> <img className="Map--Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/phone-icon.png"/>
                        0450309283 </p>
                </div>
            </div>
         )
    }
}
 
export default Map