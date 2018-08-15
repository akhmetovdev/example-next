import React from 'react';

const Price = ({ name, value, price }) => {
  return (
    <div className="price">
      <h1 className="name">{name}</h1>
      <span className="value">
        {price} {value}
      </span>
      <style jsx>{`
        .price {
          width: 100%;
          height: 200px;
          padding: 12px;
          display: flex;
          text-align: center;
          position: relative;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          transition: transform 0.3s ease-out 0.1s;
          box-shadow: 0 3px 6px 0 rgba(32, 33, 39, 0.12);
        }

        .price:hover,
        .price:focus {
          transform: translateY(-5px);
        }

        .name {
          top: -24px;
          left: 12px;
          width: 100px;
          height: 48px;
          font-size: 36px;
          line-height: 48px;
          position: absolute;
          border-radius: 5px;
          background-color: #202124;
        }

        .value {
          color: #7795f8;
          font-size: 48px;
        }
      `}</style>
    </div>
  );
};

export default Price;
