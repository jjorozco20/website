import React from 'react';
function SingleService (props){
    const {title, description, icon} = props;
        return (
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="service-heading">{title}</h4>
                <p className="text-muted">{description}</p>
            </div>
        );
}
export default SingleService;