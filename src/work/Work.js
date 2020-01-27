import React, {Component} from 'react';
import "../work/work.scss";
import Back from '../img/Back-Work.png';


class Work extends Component {
    constructor(props){
        super(props)
        this.state = {
         
    }
    }


    render () {
        return (
   <div className="work-2">
       <div className="row justify-content-center" id="row-work-2">
           <div className="col-2">
           </div>
           <div className="col-1">
           <label className="container-elipse">
              <input type="radio" checked="" name="radio"/>
               <span className="checkmark-elipse"></span>
               </label>
               <hr/>
           </div>
           <div className="col-2">
           <div className="row justify-content-between">
                   <p className="number">02</p>   
                   <p className="hedline" id="hedline-two">Техническое задание</p>
               </div>
           </div>
       </div>
       <div className="row justify-content-center">
           <div className="col-2">
           <div className="row justify-content-between">
                   <p className="hedline">Разработка</p>
                   <p className="number">03</p>
               </div>
           </div>
           <div className="col-1">
           <label className="container-elipse">
              <input type="radio" checked="" name="radio"/>
               <span className="checkmark-elipse"></span>
               </label>
               <hr/>
           </div>
           <div className="col-2">
           </div>
       </div>
       <div className="row justify-content-center">
           <div className="col-2">
           </div>
           <div className="col-1">
           <label className="container-elipse">
              <input type="radio" checked="" name="radio"/>
               <span className="checkmark-elipse"></span>
               </label>
               <hr/>
           </div>
           <div className="col-2">
           <div className="row justify-content-between">
                   <p className="number">04</p>
                   <p className="hedline">Продвижение</p>
               </div>
           </div>
       </div>
       <div className="row justify-content-center">
           <div className="col-2">
           <div className="row justify-content-between">
                   <p className="hedline">Поддержка</p>
                   <p className="number">05</p>
               </div>
           </div>
           <div className="col-1">
           <hr id="last-line"/>
           <label className="container-elipse" id="last-input">
              <input type="radio" checked="" name="radio"/>
               <span className="checkmark-elipse"></span>
               </label>
           </div>
           <div className="col-2">
           </div>
       </div> 
       <div className="text-center">
       <img id="work-back-image" src={Back} alt="back-work"></img>
       </div>
   </div>
 )
    }
}
export default Work;