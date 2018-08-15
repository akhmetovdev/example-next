import React, { Component } from 'react';
import Price from './Price';

class Prices extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 1);
  }

  render() {
    const { usd, eur, btc } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="prices">
        <div className={isVisible ? 'price-wrapper visible' : 'price-wrapper'}>
          <Price name="USD" value="RUB" price={usd.rub} />
        </div>
        <div className={isVisible ? 'price-wrapper visible' : 'price-wrapper'}>
          <Price name="EUR" value="RUB" price={eur.rub} />
        </div>
        <div className={isVisible ? 'price-wrapper visible' : 'price-wrapper'}>
          <Price name="BTC" value="USD" price={btc.usd} />
        </div>
        <style jsx>{`
          .prices {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 18px;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            justify-content: space-between;
          }

          .price-wrapper {
            opacity: 0;
            z-index: 1;
            padding: 18px;
            flex: 1 0 200px;
            transition: opacity 1s linear 0s;
          }

          .visible {
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default Prices;
