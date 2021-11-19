import React from "react";

export default function PriceChange({ info }) {
  return (
    <div className="priceChangeCont">
      <h4 className="">Price Change History</h4>
      <div className="perChangeRow">
        <div className="oneH%Cont">
          <h5>1H</h5>
          {info?.market_data?.price_change_percentage_1h_in_currency?.usd <
          0 ? (
            <p className="oneH% red">
              {info?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                2
              )}
              %
            </p>
          ) : (
            <p className="oneH% green">
              {info?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
                2
              )}
              %
            </p>
          )}
        </div>
        <div className="twenty4H%Cont">
          <h5>24H</h5>
          {info?.market_data?.price_change_percentage_24h < 0 ? (
            <p className="twenty4H% red">
              {info?.market_data?.price_change_percentage_24h?.toFixed(2)}%
            </p>
          ) : (
            <p className="twenty4H% green">
              {info?.market_data?.price_change_percentage_24h?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="sevenD%Cont">
          <h5>7D</h5>
          {info?.market_data?.price_change_percentage_7d < 0 ? (
            <p className="sevenD% red">
              {info?.market_data?.price_change_percentage_7d?.toFixed(2)}%
            </p>
          ) : (
            <p className="sevenD% green">
              {info?.market_data?.price_change_percentage_7d?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="fourteenD%Cont">
          <h5>14D</h5>
          {info?.market_data?.price_change_percentage_14d < 0 ? (
            <p className="fourteenD% red">
              {info?.market_data?.price_change_percentage_14d?.toFixed(2)}%
            </p>
          ) : (
            <p className="fourteenD% green">
              {info?.market_data?.price_change_percentage_14d?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="thirtyD%Cont">
          <h5>30D</h5>
          {info?.market_data?.price_change_percentage_30d < 0 ? (
            <p className="thirtyD% red">
              {info?.market_data?.price_change_percentage_30d?.toFixed(2)}%
            </p>
          ) : (
            <p className="thirtyD% green">
              {info?.market_data?.price_change_percentage_30d?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="sixtyD%Cont">
          <h5>60D</h5>
          {info?.market_data?.price_change_percentage_60d < 0 ? (
            <p className="sixtyD% red">
              {info?.market_data?.price_change_percentage_60d?.toFixed(2)}%
            </p>
          ) : (
            <p className="sixtyD% green">
              {info?.market_data?.price_change_percentage_60d?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="twoHunD%Cont">
          <h5>200D</h5>
          {info?.market_data?.price_change_percentage_200d < 0 ? (
            <p className="twoHunD% red">
              {info?.market_data?.price_change_percentage_200d?.toFixed(2)}%
            </p>
          ) : (
            <p className="twoHunD% green">
              {info?.market_data?.price_change_percentage_200d?.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="oneY%Cont">
          <h5>1Y</h5>
          {info?.market_data?.price_change_percentage_1y < 0 ? (
            <p className="oneY% red">
              {info?.market_data?.price_change_percentage_1y?.toFixed(2)}%
            </p>
          ) : (
            <p className="oneY% green">
              {info?.market_data?.price_change_percentage_1y?.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
