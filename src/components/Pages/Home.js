import React, {Component} from 'react';
import Header from '../Common/Header';
import {image} from '../assets/img/header-bg.jpg';

class Home extends Component{
    render() {
        return(
            //ERROR RIGHT HERE, VIDEO= 6:04 
            <div>
                <Header
                    title="Welcome to our Studio"
                    subtitle="It's Nice to meet ya"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}          
                
                />
            </div>
        );
    }
}
export default Home;