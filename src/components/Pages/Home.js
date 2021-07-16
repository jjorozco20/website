import React, {Component} from 'react';
import Header from '../Common/Header';
import backgroundImage from '../assets/img/header-bg.jpg';
//Reusable components
import Services from '../Common/Services';
class Home extends Component{
    render() {
        return(
            <div>
                <Header
                    title="Welcome to our Studio"
                    subtitle="It's Nice to meet ya"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={backgroundImage}          
                />
                <Services />
            </div>
        );
    }
}
export default Home;
