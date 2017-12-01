import React, {Component} from 'react';
import './assets/stylesheets/application.css';
import { Provider, inject, observer } from "mobx-react"
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


class App extends Component {
  render() {
  	const {inject("locale")(injectIntl(observer(pageid)))}=this.props;
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
