import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{

    render(){
        return (
            <div>
                
            <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fLink fa-bars"></i>
                        </button>
                        <Link className="navbar-brand page-scroll" to="#page-top">StartBootstrap</Link >
                    </div>
        
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <Link to="#page-top"></Link >
                            </li>
                            <li>
                                <Link className="page-scroll" to="/services">what do we do</Link >
                            </li>
                           <li>
                                <Link className="page-scroll" to="/portfolio">Portfolio</Link >
                            </li>
                            <li>
                                <Link className="page-scroll" to="/about">About</Link >
                            </li>
                            <li>
                                <Link className="page-scroll" to="/team">Team</Link >
                            </li>
                            <li>
                                <Link className="page-scroll" to="/contact">Contact</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
            </div>
        );
    }
}
export default PageWrapper;