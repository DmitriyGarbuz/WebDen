import React, {Component} from 'react';
import "../test/test.scss";
import AfterH2 from '../img/test-1.png';
import Left from '../img/arow-left.png';
import Right from '../img/arow-right.png';
import Ava from '../img/test-ava.png';
import One from '../img/test-one.png';


class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
         
    }
    }


    render () {
        return (
<div className="test">
   <div className="text-center">
       <h2>ЧТО ГОВОРЯТ</h2>
   </div>
   <div className="text-center">
      <img src={AfterH2} alt="after-h2" id="test-after-h2"></img>
   </div>
    <div className="row justify-content-center" id="test-global-row">
       <img src={Left} alt="arow-left" className="arow"></img>
       <div className="col-5" id="test-div-col-5">
           <div className="row" id="test-mob-row">
               <div className="col-3">
                   <img src={Ava} alt="ava"></img>
                   <div className="row" id="facebook">
                       <i className="fab fa-facebook-f"></i>
                       <p>Facebook</p>
                   </div>
                   <p>Источник отзыва</p>
               </div>
               <div className="col-sm">
                   <p className="test-hedline">Екатерина Михайлова</p>
                   <p className="test-after">Компания EveryDay, HR-Менеджер</p>
                   <p>Повседневная практика показывает, что рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны новая модель организационной деятельности влечет за собой процесс внедрения.</p>
                   <div className="row justify-content-end">
                       <img src={One} alt="test-one"></img>
                   </div>
               </div>
           </div>         
       </div>
       <img src={Right} alt="arow-right" className="arow"></img>
    </div>
    <div className="row justify-content-center">
        <div className="col-5">
            <div className="row" id="bottom-div"></div>
        </div>
    </div>
</div> )
    }
}
export default Test;