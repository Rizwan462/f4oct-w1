import React from 'react';


const CryptoTable = ({ cryptoData }) => {
  return (
    <table border="1">
      
      <tbody>
        {cryptoData.map((coin) => (
          <tr key={coin.id}>
            <td><img src={coin.image} alt={coin.name} width="30" /></td>
            <td>{coin.name}</td>
            <td>{coin.symbol.toUpperCase()}</td>
            {/* Add conditional styling for price */}
            <td
              className={
                coin.current_price < 0 ? 'negative-price' : 'positive-price'
              }
            >
              ${coin.current_price.toLocaleString()}
            </td>
            <td>{coin.total_volume.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
