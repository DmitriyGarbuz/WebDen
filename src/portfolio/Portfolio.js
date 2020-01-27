import React, {Component} from 'react';
import "../portfolio/portfolio.scss";
import Gallery from '../img/gallery.jpg';


class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {
         
    }
    }


    render () {
        return (
<div className="portfolio">
      <div className="text-center">
          <h2>НАШИ РАБОТЫ</h2>
       </div>
       <div className="row justify-content-center">
       <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">UI/UX</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BRANDING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">РАЗРАБОТКА</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ПРОДВИЖЕНИЕ</a>
          </li>
        </ul>
       </div>
       <div className="row justify-content-center">
           <div className="container">
          <img src={Gallery} alt="gallery"></img>
          </div>
       </div>
</div>

 )
    }
}
export default Portfolio;