import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import { setActiveLanguage } from 'react-localize-redux'

export const Header = () => (
	<header className="header">
	<right>
    <div className="container">  
    const LanguageSelector = ({ languages, setActiveLanguage }) => (
  <ul>
    { languages.map(language => 
      <li><button onClick={ setActiveLanguage }>{ language.code }</button></li>
    )}
  </ul>
)   
    </div>
    </right>
  </header>
)
const mapStateToProps = state => ({ languages: getLanguages(state.locale) });
const mapDispatchToProps = { setActiveLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
