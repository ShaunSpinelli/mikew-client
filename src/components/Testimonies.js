import React from 'react'
import TestimonieSingle from './TestimonieSingle'
import guitar from '../images/guitar-pic.jpeg'
import { Testimonials, Title } from '../styles/cssInJs/Testimonials.styles';

const Testimonies = () => {
    return ( 
        <Testimonials>
            <Title> Testimonials </ Title>
            <div className="scrolling-wrapper">
                    <TestimonieSingle // renders testomie signle format for all testimonies.
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
                    <TestimonieSingle 
                        image= "https://busites_www.s3.amazonaws.com/acdccom/content/discography/highwaytohell.jpg"
                        testimonie= "totally awesome dude."
                        />
            </div>
        </ Testimonials >
     )
}
 
export default Testimonies