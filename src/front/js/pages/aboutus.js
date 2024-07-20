import React from 'react';
import '../../styles/aboutus.css'; // Adjust the path to your CSS file

export const AboutUs = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="image-container">
          <img src="https://th.bing.com/th/id/OIP.1ILPEtXXYmvnPIHhh_YxAwHaEo?w=289&h=180&c=7&r=0&o=5&pid=1.7" alt="Profile 1" />
          <div className="name-circle">Ali</div>
        </div>
        <p>Steve Jobs was an American inventor, designer, and entrepreneur who was the cofounder, chief executive, and chairman of Apple Inc. 
          Born in 1955 to two University of Wisconsin graduate students who gave him up for adoption, Jobs was smart but directionless, 
          dropping out of college and experimenting with different pursuits before cofounding Apple with Steve Wozniak in 1976. 
          Jobs left the company in 1985, launching Pixar Animation Studios, then returned to Apple more than a decade later. 
          The tech giant’s revolutionary products, which include the iPhone, iPad, and iPod, have dictated the evolution of modern technology.
        </p>
      </div>
      <div className="column">
        <div className="image-container">
          <img src="https://th.bing.com/th/id/OIP.eTAvLqZzSfCsyoVCYnw4tAHaGG?w=200&h=180&c=7&r=0&o=5&pid=1.7" alt="Profile 2" />
          <div className="name-circle">Javier</div>
        </div>
        <p>Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity. 
          She was the first woman to win a Nobel Prize, the only woman to win in two fields, and the only person to win in multiple sciences. 
          Her notable achievements include the development of the theory of radioactivity, techniques for isolating radioactive isotopes, 
          and the discovery of two elements, polonium and radium. Her work not only contributed to the scientific field but also paved the way for future female scientists.
        </p>
      </div>
      <div className="column">
        <div className="image-container">
          <img src="https://th.bing.com/th/id/OIP.krIkFaOpGNtzhpo0z4g16AAAAA?w=261&h=180&c=7&r=0&o=5&pid=1.7" alt="Profile 3" />
          <div className="name-circle">Tony</div>
        </div>
        <p>Leonardo da Vinci was an Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpture, architecture, 
          science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. 
          He is widely considered one of the greatest painters of all time despite fewer than 25 of his paintings having survived. 
          His most famous works include the Mona Lisa and The Last Supper. His scientific studies, particularly in anatomy, contributed significantly to the field.
        </p>
      </div>
    </div>
  );
};
