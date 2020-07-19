import React from "react";
import StockItem from "./StocktItem/StockItem";

const stockList = props => {
    const stocks = props.stocks.map(stock => {
      return (
        <StockItem
 
          stockId={stock._id}
          value={stock.value}
        />
      );
    });
  
    return <ul className="stock__list">{stocks}</ul>;
  };
  

export default stockList;
