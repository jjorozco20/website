import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';


import img1 from '../assets/img/portfolio/dreams-preview.png';
import img2 from '../assets/img/portfolio/escape-preview.png';
import img3 from '../assets/img/portfolio/golden-preview.png';
import img4 from '../assets/img/portfolio/startup-framework-preview.png';
import img5 from '../assets/img/portfolio/treehouse-preview.png';
import img6 from '../assets/img/portfolio/roundicons-free.png';

const portfolio = [
    {title:'Threads', subtitle:'Illustration', image: img1},
    {title:'Explore', subtitle:'Graphic Design', image: img2},
    {title:'Finish', subtitle:'Identity', image: img3},
    {title:'Lines', subtitle:'Branding', image: img4},
    {title:'Southwest', subtitle:'Website Design', image: img5},
    {title:'Window', subtitle:'Photography', image: img6}
];
class Portfolio extends Component{
    render(){
        return (
            <section id="portfolio" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                       {portfolio.map((item, index) => {
                           return <PortfolioItem {...item} key={index}/>
                       })}
                        
                    </div>
                </div>
            </section>
        );
    }
}
export default Portfolio;