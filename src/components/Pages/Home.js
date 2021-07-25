import React from 'react';
import Header from '../Common/Header';
import backgroundImage from '../assets/img/header-bg.jpg';
import Timeline from '../Common/Timeline';
import Services from '../Common/Services';
import Team from '../Common/Team';

function Home (){
    return(
        <>
            <Header 
              title="Welcome to our Studio" 
              subtitle="It's Nice to meet ya" 
              buttonText="Tell me more" 
              link="/services" 
              showButton={true} 
              image={backgroundImage}
            />
            <Services/>
            <Timeline/>
            <Team/>
            
        </>
    );
}
export default Home;
