import React, { Component } from 'react';
import '../../assets/stylesheets/application.css';
import { getWeb3, getNetworkVersion } from '../../utils/blockchainHelpers'
import { Link } from 'react-router-dom'
import { defaultState } from '../../utils/constants'
import { ICOConfig } from '../Common/config'
import { noDeploymentOnMainnetAlert } from '../../utils/alerts'

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
      <div>
        <section className="home">
          <div className="crowdsale">
            <div className="container">
              <h1 className="title">XPOWERMINER XPS ICO</h1>
              <p className="description">
              
              XPS токены подкреплены реальным майнингом и 
              бесплатной электроэнергией от ветрогенераторов!
 
              <br/>Смарт контракты ICO основаны на коде <a href="https://github.com/TokenMarketNet/ico">TokenMarket</a>. 
              </p>
              <div className="buttons">
                <a onClick={this.goToCrowdsalePageH} className="button button_fill">Статистика кампании</a>
                <a onClick={this.goToInvestPageH} className="button button_fill">Страница Участника</a>
              </div>
            </div>
          </div>
      <center>
          <div className="process">
            <div className="container">
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-page"></div>
                <p className="title">Страница кампании</p>
                <p className="description">
                  Добавьте в избранное для мониторинга статистики
                </p>
              </div>
            </div>
          </div>
      </center>
      </section>
      </div>
    );
  }
}
