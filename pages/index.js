import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Prices from '../components/Prices';

const rubleLink = 'https://www.cbr-xml-daily.ru/daily_json.js';
const bitcoinLink =
  'https://widgets.coinmarketcap.com/v2/ticker/1/?ref=widget&convert=USD';

class Index extends Component {
  static async getInitialProps() {
    const [rubleResponse, bitcoinResponse] = await Promise.all([
      fetch(rubleLink),
      fetch(bitcoinLink)
    ]);

    const { Valute: rubleData } = await rubleResponse.json();
    const { data: bitcoinData } = await bitcoinResponse.json();

    const usd = { rub: rubleData.USD.Value.toFixed(2) };
    const eur = { rub: rubleData.EUR.Value.toFixed(2) };
    const btc = { usd: bitcoinData.quotes.USD.price.toFixed(2) };

    return { usd, eur, btc };
  }

  render() {
    const { usd, eur, btc } = this.props;

    return (
      <div id="app">
        <Head>
          <title>HipsterPrices</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
        </Head>
        <Prices usd={usd} eur={eur} btc={btc} />
        <a
          href="https://twitter.com/akhmetovdev"
          target="_blank"
          rel="noreferrer noopener"
          className="link"
        >
          by @akhmetovdev
        </a>
        <style jsx global>{`
          *,
          *:before,
          *:after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html,
          body,
          #app {
            width: 100%;
            height: 100vh;
            font-weight: bold;
            font-family: Open Sans, sans-serif;
          }

          #app {
            display: flex;
            color: #ffffff;
            background: #f5af19;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, #f5af19, #f12711);
            background: -webkit-linear-gradient(to right, #f12711, #f5af19);
          }

          .link {
            right: 36px;
            bottom: 36px;
            color: #202124;
            position: absolute;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
