import React, {Component} from 'react';
import {Link} from 'react-router-dom';
 class Header extends Component{
    render(){
        return(
            <header className="masthead" style={{backgroundImage: this.props.image}}>
                    <div className="container">
                            <div className="intro-text">
                                <div className="intro-lead-in">{this.props.title}</div>
                                <div className="intro-heading">{this.props.subtitle} </div>
                                {this.props.showButton &&
                                    <Link to={this.props.link} className="page-scroll btn btn-xl">{this.props.buttonText}</Link>
                                }
                                
                            </div> 
                    </div>
                </header>
        )
    }
 }
 export default Header;
