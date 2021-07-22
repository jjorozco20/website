import React, {Component} from 'react';
import Header from '../Common/Header';
import backgroundImage from '../assets/img/header-bg.jpg';
import Timeline from '../Common/Timeline';
//Reusable components
import Services from '../Common/Services';
class Home extends Component{
    render() {
        return(
            <div>
                <Header title="Welcome to our Studio" subtitle="It's Nice to meet ya" buttonText="Tell me more" link="/services" showButton={true} image={backgroundImage}/>
                <Services/>
                <Timeline/>
                
            </div>
        );
    }
}
export default Home;
