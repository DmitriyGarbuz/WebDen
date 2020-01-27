import React, {Component} from 'react';
import "../header/header.scss";
import logo from '../img/logo.png';


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

            

    }
    }

    render () {
        return (
            <header className="header">
            <div className="row justify-content-center" >

                <div className="col-2"> 
                  <img src={logo} alt="logo"/>
                </div>
                <div className="col-4"></div>
                <div className="col-2">
                    <div className="row" id="mob-row">
                        <ul className="nav">
                            <li className="nav-item">
                              <a className="nav-link" href="#ru" id="heder-ru">ru</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#en">en</a>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"><i className="fas fa-bars"></i></div>
                              
                            </li>
                          </ul>
                          
                     </div>
                </div>

            </div>
    <div className="container">
        <div className="text-center">
        <h1>DEVELOPMENT AND PROMOTION BY <b>YOU-STUDIO</b></h1>
        </div>
        <div className="text-center">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Создать сайт..." aria-label="Создать сайт..." aria-describedby="button-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
            </div>
            </div>
          </div>
          <div className="text-center">
             <button type="button" className="btn btn-primary btn-lg">Заказать сайт</button>
          </div>
          <div className="text-center" id="bottom-p">
             <p>Листайте дальше</p>
          </div>
    </div>
        </header>


        )
    }
}
export default Header;