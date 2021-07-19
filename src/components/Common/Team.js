import React from 'react';
import TeamMember from './TeamMember';
import TeamImage1 from '../assets/img/team/1.jpg';
import TeamImage2 from '../assets/img/team/2.jpg';
import TeamImage3 from '../assets/img/team/3.jpg';

const members = [
    {name: 'Kay Garland', role: 'Lead Designer', image: TeamImage1},
    {name: 'Larry Parker', role: 'Lead Marketer', image: TeamImage2},
    {name: 'Diana Petersen', role: 'Lead Developer', image: TeamImage3}
];

function Team(){
    return (
    <section id="team" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                {members.map((member, index) => (<TeamMember {... member} key={index}/>))}
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Team;