import React from 'react'
import '../../assets/stylesheets/application.css';
import {inject, observer} from "mobx-react" 

export const Header = () => (

	<header className="header">
 const lang_switch = ({locale}) => <div className="container">  
    <div>
         <img src="../../assets/images/RU.png"  className="flags"  onClick={locale.value = "ru"} /img>
    </div>
    <div> 
         <img src="../../assets/images/US.png"  className="flags"  onClick={locale.value = "en"} /img>
   </div>
   </div>
  </header>
)


export default inject("locale")(observer(lang_switch));
