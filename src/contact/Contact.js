import React, {Component} from 'react';
import "../contact/contact.scss";



class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
         
    }
    }


    render () {
        return (
<div className="contact">
   <div className="text-center">
       <h2>Связатся с нами</h2>
   </div>
        <div className="row justify-content-center" id="contact-row">
             <div className="col-4">
                 <p className="hedline">Контакты</p>
                 <p >E-MAIL:</p>
                 <p>touch@webden-studio.com</p>
                 <div className="row justify-content-start" id="mob-contact-tel">
                     <div className="col">
                         <p>Телефон:</p>
                         <p>+38 063 863 97 49</p>
                     </div>
                     <div className="col">   
                         <p>Наш Skype:</p>
                         <div className="row">
                         <i className="fab fa-skype"></i>
                             <p>webdenisenko</p>
                         </div>
                     </div>
                 </div>
                 <div className="row justify-content-between" id="net-row">
                     <div className="col-sm">
                     <p className="hedline">Социальные Сети</p>
                     </div>
                     <div className="col-sm ">
                         <div className="row justify-content-between">
                     <i className="fab fa-vk"></i>
                     <i className="fab fa-facebook-f"></i>
                     <i className="fab fa-twitter"></i>
                     <i className="fas fa-basketball-ball"></i>
                     <i className="fab fa-behance"></i>
                     <i className="fab fa-instagram"></i>
                     </div>
                     </div>
                 </div>
                 <p className="text-small">© Webden-Studio 2017. Все права защищены</p>
             </div>

             <div className="col-4" id="form-right">
                 <div className="row">
                     <div className="col-sm">
                     <input className="form-control" type="text" placeholder="Имя"/>
                     </div>
                     <div className="col-sm">
                     <input className="form-control" type="text" placeholder="Телефон или e-mail"/>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-sm">
                     <input className="form-control" type="text" placeholder="Сообщение"/>
                     </div>
                 </div>
                 <div className="row justify-content-end">
                     <button type="button" className="btn btn-primary btn-lg">Отправить</button>
                     </div>
             </div>
        </div>
        <div className="futer"></div>
</div> )
    }
}
export default Contact;