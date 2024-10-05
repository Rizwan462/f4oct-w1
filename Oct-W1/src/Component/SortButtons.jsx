import React from 'react';

const SortButtons = ({ handleSort }) => {
  return (
    <>
      <button onClick={() => handleSort('market_cap')}>Sort by Market Cap</button>
      <button onClick={() => handleSort('percentage_change')}>Sort by % Change</button>
    </>
  );
};

export default SortButtons;


