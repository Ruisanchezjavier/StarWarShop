import React from 'react';
import '../../styles/aboutus.css';
import { StarBackground } from '../component/StarBackground';

export const AboutUs = () => {
  return (     
     
        <div className="about-container1">
            <StarBackground />
          <div className="background-zoom1"></div>
          <div className="content1">
            <h1>About Us</h1>
            <p>
            Ali, Javier and Tony came together with a shared vision: "to create a revolutionary website that would transform the way people interact with technology".
            </p>
            <pre>
{`Ali: As the front-end master, Ali is responsible for the look and feel 
   of the website. His ability to design intuitive and attractive 
   interfaces has been essential in capturing the attention of users. 
   Ali ensures that every element on the site is visually pleasing and 
   easy to use, providing a smooth and enjoyable experience to all 
   visitors.
 
Javier: with his dual competence in back-end and front-end, is
   the technical driving force of the project. On the back-end side,
   Javier has built a robust and secure architecture that ensures the 
   site runs efficiently and without interruptions. On the front-end,
   he works alongside Ali to implement advanced functionalities and 
   ensure seamless integration between design and functionality.

Tony: the project leader, is the strategist and coordinator of
   the team. With a clear vision and exceptional management skills,
   Tony ensures that all parts of the project move forward in harmony.
   He is the link between the technical team and the needs of the 
   market, guiding the development of the site to ensure that it meets
   the expectations and requirements of the users. His leadership has
   been crucial in keeping the team motivated and focused on 
   their goals.
    `}
            </pre>
          </div>
        </div>
      );
    };
    
   
    
