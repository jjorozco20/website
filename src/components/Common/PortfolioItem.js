import React, {Component} from 'react';
class PortfolioItem extends Component{
    render(){
        return(
            <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={this.props.image} class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <h4>{this.props.title}</h4>
                        <p class="text-muted">{this.props.subtitle}</p>
                    </div>
                </div>
        );
    }
}
export default PortfolioItem;