import React, { Component } from 'react';
import '../../assets/stylesheets/application.css';
import { getWeb3, getNetworkVersion } from '../../utils/blockchainHelpers'
import { Link } from 'react-router-dom'
import { defaultState } from '../../utils/constants'
import { ICOConfig } from '../Common/config'
import { noDeploymentOnMainnetAlert } from '../../utils/alerts'
import {Ch_lang} from './utils/Translate'

var TR_pagedata={
    	"title1": {
      "1": "XPOWERMINER XPS ICO",
      "2": "XPOWERMINER XPS ICO"
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
    
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState
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
    
    
    {this.Ch_lang(TR_pagedata)};
    
      <div>
      
        <section className="home">
          <div className="crowdsale">
            <div className="container">
              <h1 className="title" data-id_phrase="title1"></h1>
              <p className="description" data-id_phrase="descrip1">
              //Конструктор ICO позволяет выпустить собственный токен и разместить контракт ICO всего за 5 шагов. С помощью нашего Конструктора Вы сможете запустить компанию по сбору средств(краудсейл) в блокчейне Ethereum, верифицировать контракты токена и ICO  на Etherscan, получить страницу отображающую ход компании по сбору средств и страницу участия в ICO 
              //<br/>Смарт контракты основаны на коде <a href="https://github.com/TokenMarketNet/ico">TokenMarket</a>. 
              </p>
              <div className="buttons">
                 <a onClick={this.goToCrowdsalePageH} className="button button_fill" data-id_phrase="butt1"></a>
                <a onClick={this.goToInvestPageH} className="button button_fill" data-id_phrase="butt2"></a> 
              </div>
            </div>
          </div>
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-page"></div>
                <p className="title" data-id_phrase="title2"></p>
                <p className="description" data-id_phrase="descrip1">
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
