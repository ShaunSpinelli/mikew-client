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
                        image= "https://static-wix-blog.wix.com/blog/wp-content/uploads/2016/01/07101455/5-ways-musicians-can-make-more-money_image.png"
                        testimonie= "'' Dunn was the guy most responsible for putting a face on (Manitoba Television Network’s) first on-air decade. '' "
                        author= "- The Beatles"
                        />
                    <TestimonieSingle 
                        image= "https://media.pitchfork.com/photos/5929a47a5e6ef959693208a6/1:1/w_600/0b253d77.jpg"
                        testimonie= "'' Kevin likes to be the centre of attention. He’s one of those guys that doesn’t demand the attention, but just falls into or earns the role of head attention getter. ''' "
                        author= "- Jimi Hendrix"
                        />
                    <TestimonieSingle 
                        image= "https://www.billboard.com/files/styles/article_main_image/public/media/Tame-Impala-Lollapalooza-Berlin-2015-billboard-650.jpg"
                        testimonie= "'' Kevin has the unique ability to communicate and project a positive approach in everything he does.  A a true people-person…with high level social skills like convincing, negotiating, selling, communicating ideas, telling stories,motivating… '' "
                        author= "- King"
                        />
                    <TestimonieSingle 
                        image= "http://somethingelsereviews.com/wp-content/uploads/2013/05/Queen-Freddie-Mercury-Brian-May.jpg"
                        testimonie= "'' He spits out these clever, poetic pieces of art faster then anyone else I have ever come across.' -Tony Wytinck, Senior Editor, MidCanada Production Services. ''"
                        author= "- Nacho Man"
                        />
                    <TestimonieSingle 
                        image= "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg?crop=900:600&width=440"
                        testimonie= " '' He has used his entertainment skills to bring people together, network, celebrate special occasions, raise money for organizations and charities, market himself and his work, and to create great memories for all around him. ''"
                        author= "- Dennis"
                        />
                    <TestimonieSingle 
                        image= "http://zurlocker.typepad.com/photos/uncategorized/cimg1148.jpg"
                        testimonie= "'' Kevin likes to be the centre of attention. He’s one of those guys that doesn’t demand the attention, but just falls into or earns the role of head attention getter. ''"
                        author= "- Dr legend kid"
                        />
                    <TestimonieSingle 
                        image= "http://images6.fanpop.com/image/photos/33500000/funny-guitar-msyugioh123-33511026-400-300.jpg"
                        testimonie= "'' Kevin will win over a crowd with a clever invitations, organizing of gatherings, re-written song lyrics, stories of the past or performing of songs that everyone can sing along. ''"
                        author= "- Cat"
                        />
            </div>
        </ Testimonials >
     )
}
 
export default Testimonies