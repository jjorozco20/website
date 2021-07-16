import React, {Component} from 'react';
import SingleService from './SingleService';

const services = [
    {title: 'E-Commerce', description: 'lorem ipsum', icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', description: 'arrivederci', icon: 'fa-laptop'},
    {title: 'Web Security', description: 'piano', icon: 'fa-lock'}
];

class Services extends Component{
    render(){
        return (
            <div>
                
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">What do we do</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                      {services.map((service, index) => {
                          return <SingleService {...service} key={index} />
                      })}
                    
                    </div>
                </section>
            </div>
        );
    }
}
export default Services;