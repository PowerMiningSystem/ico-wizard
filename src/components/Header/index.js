import React from 'react'
import '../../assets/stylesheets/application.css';
import {inject, observer} from "mobx-react" 
import locale from '../../index.js;

class Header extends Component {
  render() {
    return (
 <header className="header">
 const this.props.lang_switch = ({locale}) => <div className="container">  
    <div>
         <img src="../../assets/images/RU.png"  className="flags"  onClick={locale.value = "ru"} />
    </div>
    <div> 
         <img src="../../assets/images/US.png"  className="flags"  onClick={locale.value = "en"} />
   </div>
   </div>
  </header>
);
  }
}
  

export default inject("locale")(observer(lang_switch));
