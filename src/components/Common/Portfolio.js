import React from 'react';
import PortfolioItem from './PortfolioItem';
import itemImage1 from '../assets/img/portfolio/dreams-preview.png';
import itemImage2 from '../assets/img/portfolio/escape-preview.png';
import itemImage3 from '../assets/img/portfolio/golden-preview.png';
import itemImage4 from '../assets/img/portfolio/startup-framework-preview.png';
import itemImage5 from '../assets/img/portfolio/treehouse-preview.png';
import itemImage6 from '../assets/img/portfolio/roundicons-free.png';

const portfolio = [
    {title:'Threads', subtitle:'Illustration', image: itemImage1},
    {title:'Explore', subtitle:'Graphic Design', image: itemImage2},
    {title:'Finish', subtitle:'Identity', image: itemImage3},
    {title:'Lines', subtitle:'Branding', image: itemImage4},
    {title:'Southwest', subtitle:'Website Design', image: itemImage5},
    {title:'Window', subtitle:'Photography', image: itemImage6}
];

function Portfolio (){
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
                       {portfolio.map((item, index) => (<PortfolioItem {...item} key={index}/>))}
                    </div>
                </div>
            </section>
        );
}
export default Portfolio;
