import React, { Component } from 'react';
import '../../assets/stylesheets/application.css';
import { getWeb3, getNetworkVersion } from '../../utils/blockchainHelpers'
import { Link } from 'react-router-dom'
import { defaultState } from '../../utils/constants'
import { noDeploymentOnMainnetAlert } from '../../utils/alerts'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState
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
                <Link to={{ pathname: '/crowdsale', query: { state: this.state } }}><a className="button button_fill">Статистика кампании</a></Link>
                <Link to={{ pathname: '/invest', query: { state: this.state } }}><a className="button button_fill">Страница Участника</a></Link> 
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
