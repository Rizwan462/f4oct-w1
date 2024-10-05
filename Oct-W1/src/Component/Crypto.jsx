import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortButtons from './SortButtons';
import CryptoTable from './CryptoTable';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState(null);

  // Fetch Data Using async/await
  const fetchDataUsingAsyncAwait = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDataUsingAsyncAwait();
  }, []);

  // Search Functionality
  const handleSearch = () => {
    return cryptoData.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Sort Functionality
  const handleSort = (type) => {
    const sortedData = [...cryptoData];
    if (type === 'market_cap') {
      sortedData.sort((a, b) => b.market_cap - a.market_cap);
    } else if (type === 'percentage_change') {
      sortedData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    }
    setCryptoData(sortedData);
  };

  // Render the filtered and sorted data
  const filteredData = handleSearch();

  return (
    <div className="App">
      <div id="header">

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortButtons handleSort={handleSort} />
      </div>
      <CryptoTable cryptoData={filteredData} />
    </div>
  );
};

export default Crypto;
