import React, { Component } from 'react';
import '../../assets/stylesheets/application.css';
import { getWeb3, getNetworkVersion } from '../../utils/blockchainHelpers'
import { Link } from 'react-router-dom'
import { defaultState } from '../../utils/constants'
import { ICOConfig } from '../Common/config'
import { noDeploymentOnMainnetAlert } from '../../utils/alerts'

import {addLocaleData, injectIntl, FormattedMessage} from "react-intl"
import { inject,  observer } from 'mobx-react'
import {LocaleStore} from "mobx-react-intl"


 const transltions={
    en: {
      "title1": "XPOWERMINER XPS ICO",
      "desc1": "The XPS tokens - backed with mining and free electricity from Wind Turbines!",
      "butt1": "Crowdsale Page",
      "butt2": "Invest Page",
      "desc2": "Bookmark this page for the campaign statistics"
        },
    ru: {
      "title1": "XPOWERMINER XPS ICO",
      "desc1": "XPS токены подкреплены реальным майнингом и бесплатной электроэнергией от ветрогенераторов!",
      "butt1": "Статистика кампании",
      "butt2": "Страница участника",
      "desc2": "Добавьте в избранное для мониторинга кампании"
        },
                  };

     

/*

      },
      "descrip1":{
      "1": "XPS токены подкреплены реальным майнингом и бесплатной электроэнергией от ветрогенераторов! Смарт контракты ICO основаны на коде TokenMarket.",
      "2": "The XPS tokens - backed with mining and free electricity from Wind Turbines!"
      },
      "butt1":{
      "1":"Статистика кампании",
      "2":"Crowdsale Page"
      },
      "butt2":{
      "1":"Страница Участника",
      "2":"Invest Page"
      },
      "title2":{
      "1":"Страница кампании",
      "2":"Crowdsale Page"
      },
      "descrip2":{
      "1":"Добавьте в избранное для мониторинга статистики",
      "2":"Bookmark this page for the campaign statistics"
      },

    };
   */
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    const {intl: {formatMessage}, locale} = pageid;
    const injectedd=this.inject("locale");
    const observedd=this.injectIntl(observer(pageid))
  }
 goToInvestPageH = () => {
  		let queryStr = "";
  		if (!ICOConfig.crowdsaleContractURL || !ICOConfig.networkID) {
  			if (this.state.contracts.crowdsale.addr) {
	  			queryStr = "?addr=" + this.state.contracts.crowdsale.addr[0];
	  			if (this.state.networkID)
	  				queryStr += "&networkID=" + this.state.networkID;
	  		}
  		}

      this.props.history.push('/invest' + queryStr);
  	}
  
  goToCrowdsalePageH = () => {
  		let queryStr = "";
  		if (!ICOConfig.crowdsaleContractURL || !ICOConfig.networkID) {
  			if (this.state.contracts.crowdsale.addr) {
	  			queryStr = "?addr=" + this.state.contracts.crowdsale.addr[0];
	  			if (this.state.networkID)
	  				queryStr += "&networkID=" + this.state.networkID;
	  		}
  		}

      this.props.history.push('/crowdsale' + queryStr);
  	}
  	
  	 

  render() {
    return (
      <div>
        <section className="home">
          <div className="crowdsale">
            <div className="container">
              <h1 className="title">{formatMessage({id: "title1"})}</h1>
              <p className="description">{formatMessage({id: "desc1"})}</p>
              <div className="buttons">
                 <a onClick={this.goToCrowdsalePageH} className="button button_fill">{formatMessage({id: "butt1"})}</a>
                <a onClick={this.goToInvestPageH} className="button button_fill">{formatMessage({id: "butt2"})}</a> 
              </div>
            </div>
          </div>
          <center>
            <div className="process">
            <div className="container">
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-page"></div>
                <p className="title">Campaing Statistics</p>
                <p className="description">{formatMessage({id: "desc2"})}</p>
              </div>
            </div>
           </div>
          </center>
        </section>
      </div>
    );
  }
}
