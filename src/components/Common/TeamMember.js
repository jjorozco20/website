import React from 'react';

function TeamMember(props){
    const {name, role, image} = props;
    return (
    <div className="col-sm-4">
        <div className="team-member">
            <img src={image} className="img-responsive img-circle" alt=""/>
            <h4>{name}</h4>
            <p className="text-muted">{role}</p>
            <ul className="list-inline social-buttons">
                <li><button href="#"><i className="fa fa-twitter"></i></button>
                </li>
                <li><button href="#"><i className="fa fa-facebook"></i></button>
                </li>
                <li><button href="#"><i className="fa fa-linkedin"></i></button>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default TeamMember;