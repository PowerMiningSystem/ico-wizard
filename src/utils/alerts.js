import sweetAlert from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';

export function noMetaMaskAlert() {
    sweetAlert({
      title: "Warning",
      text: "You don't have Metamask installed. Check instructions <a href='https://hackmd.io/s/SJSvCFJWz' target='blank'></a>.",
      html: true,
      type: "warning"
    });
}

export function noContractDataAlert() {
    sweetAlert({
      title: "Warning",
      text: "The crowdsale data is empty. There is nothing to deploy. Please, start ICO Wizard from the beginning.",
      html: true,
      type: "warning"
    });
}

export function noContractAlert() {
    sweetAlert({
      title: "Warning",
      text: "There is no contract at this address",
      html: true,
      type: "warning"
    });
}

export function invalidCrowdsaleAddrAlert() {
    sweetAlert({
      title: "Warning",
      text: "Invalid crowdsale address is indicated in config and/or in query string.",
      html: true,
      type: "warning"
    });
}

export function invalidNetworkIDAlert() {
    sweetAlert({
      title: "Warning",
      text: "Invalid network ID is indicated in config and/or in query string.",
      html: true,
      type: "warning"
    });
}

export function successfulInvestmentAlert(tokensToInvest) {
    sweetAlert({
        title: "Success",
        text: "Congrats! You've successfully bought " + tokensToInvest + " tokens!",
        html: true,
        type: "success"
    }, function() {
        window.location.reload();
    });
}

