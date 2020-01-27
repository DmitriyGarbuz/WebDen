import React, {Component} from 'react';
import "../services/services.scss";



class Services extends Component {
    constructor(props){
        super(props)
        this.state = {
         
    }
    }


    render () {
        return (
<div className="services">
   <div className="text-center">
      <h2>МЫ ДЕЛАЕМ</h2>
   </div>
   <div className="container">
      <div className="row" id="services-row">
         <div className="col-6" id="services-01"><div className="row">
         <i className="fas fa-plus-circle" id="services-plus-circle"></i>
         <p>Разработка сайтов</p>
             </div></div>
         <div className="col-6" id="services-02"><div className="row">
         <i className="fas fa-plus-circle"></i>
         <p>Дизайн</p>
         </div></div>
      </div>
      <div className="container" id="seo">
          <div className="row justify-content-between" id="seo-row">
              <div className="row" >
              <i className="fas fa-times-circle"></i>
              <p>SEO продвижение</p>
              </div>              
              <button type="button" className="btn btn-outline-secondary">Сделать заказ</button>
          </div>
          <div className="row" id="seo-row2">
              <div className="col-sm">
                  <p className="seo-hedline">Почему:</p>
                  <p>—  Используем комплексные решения (SEO, SMM, A/B)</p>
                  <p>—  Анализируем и обходим конкурентов</p>
                  <p>—  Подготовим план продвижения соответствующий Вашему бюджету</p>
              </div>
              <div className="col-sm">
                  <p className="seo-hedline">Зачем:</p>
                  <p>Предоставьте возможность миру узнать о Вашем товаре/услуге</p>
                  <p>Ваш бренд имеет возможность стать знаменитым, а сайт прибыльным</p>
              </div>
              <div className="col-sm">
                  <p className="seo-hedline">Сколько:</p>
                  <p>Цена для каждого проекта обсуждается индивидуально</p>
              </div>
          </div>
      </div>
   </div>
   <div className="work">
      <div className="text-center">
          <h2>ПРОЦЕСС</h2>
       </div>
       <div className="row justify-content-center">
           <div className="col-2">
               <div className="row justify-content-between">
                   <p className="hedline">Заявка</p>
                   <hr></hr>
                   <p className="number">01</p>
               </div>
               <p>Таким образом начало повседневной работы по формированию позиции позволяет оценить значение позиций</p>
           </div>
           <div className="col-1">
           <label className="container-elipse">
  <input type="radio" checked="checked" name="radio"/>
  <span className="checkmark-elipse"></span>
</label>
<hr/>
           </div>
           <div className="col-2"></div>
       </div>
   </div>
</div> )
    }
}
export default Services;