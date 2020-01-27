import React, {Component} from 'react';
import "../plus/plus.scss";
import pc from '../img/pc.png';

const data = [{id: '01', hedline: 'Адаптивный дизайн', description: 'Мы стали более занятыми, но потребность в информации не исчезла. Поэтому мы все чаще используем портативные устройства такие как телефоны или планшеты. И конечно уже не для кого не секрет что сайт обязательно должен быть адаптивен для всех экранов, иначе это не сайт, но хотелось бы так же подчеркнуть, что сайт должен быть быстрым что бы загрузиться на 2g.'},
{id: '02', hedline: 'Внутренняя SEO оптимизация', description: 'Мы стали более занятыми, но потребность в информации не исчезла. Поэтому мы все чаще используем портативные устройства такие как телефоны или планшеты. И конечно уже не для кого не секрет что сайт обязательно должен быть адаптивен для всех экранов, иначе это не сайт, но хотелось бы так же подчеркнуть, что сайт должен быть быстрым что бы загрузиться на 2g.'},
{id: '03', hedline: 'Инструменты маркетинга', description: 'Мы стали более занятыми, но потребность в информации не исчезла. Поэтому мы все чаще используем портативные устройства такие как телефоны или планшеты. И конечно уже не для кого не секрет что сайт обязательно должен быть адаптивен для всех экранов, иначе это не сайт, но хотелось бы так же подчеркнуть, что сайт должен быть быстрым что бы загрузиться на 2g.'},
{id: '04', hedline: 'Заботливая тех. поддержка', description: 'Мы стали более занятыми, но потребность в информации не исчезла. Поэтому мы все чаще используем портативные устройства такие как телефоны или планшеты. И конечно уже не для кого не секрет что сайт обязательно должен быть адаптивен для всех экранов, иначе это не сайт, но хотелось бы так же подчеркнуть, что сайт должен быть быстрым что бы загрузиться на 2g.'}
]




class Pluses extends Component {
    state = {
id: this.props.id,
hedline: this.props.hedline,
description: this.props.description,
name: "plus-"+this.props.id
    }
activePlus = (e) => {
        console.log(e);
        }
    render () {
        return (
<div className="row" id={this.state.name} > 
    <p className="number">{this.state.id}</p>
    <i className="fas fa-minus"></i>
    <div className="width-p" >
    <p className="hedline" onClick={this.activePlus}>{this.state.hedline}</p>
    </div>
</div>               
        )
    }

}


class Plus extends Component {
    constructor(props){
        super(props)
        this.state = {
active: '01',
datas: data,
info: data[0]          
    }
    }


    render () {
        return (
<div className="plus">
   <div className="text-center">
      <h2>ПОЧЕМУ МЫ</h2>
   </div>
   <div className="row justify-content-center" id="row-global">
      <div className="col-3" id="plus-col-3">
         {this.state.datas ?
            this.state.datas.map(data =>
             <Pluses {...data} key={data.id} activePlus={this.activePlus}/>
           ) : <p>Загрузка...</p>
         }
       </div>
       <div className="col-5">
           <div className="row justify-content-end">
               <i className="fas fa-angle-left"></i>
               <p className="nav">{this.state.info.id}/04</p>
               <i className="fas fa-angle-right"></i>
           </div>
           <div className="row">
              <div className="col-3">
                 <img src={pc} alt="pc"></img>
              </div>
              <div className="col-sm">
                 <p className="hedline">{this.state.info.hedline}</p>
                 <p>{this.state.info.description}</p>
              </div>           
           </div>
      </div>
   </div>
</div> )
    }
}
export default Plus;