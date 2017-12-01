import React, {Component} from 'react';
import './assets/stylesheets/application.css';
import { Provider, inject, observer } from "mobx-react"
import {MobxIntlProvider, LocaleStore} from "mobx-react-intl"
import {addLocaleData, injectIntl, FormattedMessage} from "react-intl"
import { Header, Footer, Home, Crowdsale, Invest } from './components/index'
import { getQueryVariable } from './utils/utils'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AlertContainer from 'react-alert'
import { TOAST } from './utils/constants'
import { toast } from './utils/utils'
import enLocale from 'react-intl/locale-data/en'
import ruLocale from 'react-intl/locale-data/ru'

addLocaleData([...enLocale, ...ruLocale]);

const localeStore = new LocaleStore("en", translations);
const store = {
    locale: localeStore, 
};

class App extends Component {
  render() {
  	const {injectedd,observedd}=this.props;
    var crowdsaleAddr = getQueryVariable("addr");
    return (
      <Router>
        <div>
          <Header/>
        <Provider {...store}> 
         <MobxIntlProvider>
          <Route exact path="/" component={crowdsaleAddr?Crowdsale:Home}/>
          <Route exact path="/crowdsale" component={Crowdsale}/>
          <Route exact path="/invest" component={Invest}/>
         </MobxIntlProvider>
       </Provider>
          <Footer/>
          <AlertContainer ref={a => toast.msg = a} {...TOAST.DEFAULT_OPTIONS} />
       
        </div>
      </Router>
    )
  }
}

export default App;
