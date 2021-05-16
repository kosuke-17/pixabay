import React from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

const App = () => {
    const onSearchSubmit = async (term) => {
      try {
        const params = {
          key: "21636522-20ab1cbc2fa3bedf8801a84b9",
          q: term,
        };
        const response = await axios.get('https://pixabay.com/api/', { params });
        console.log(response);
      } catch {

      }
    };
  return (
  <div className="ui container" style={{ marginTop: '20px' }}>
    <SearchBar onSubmit={onSearchSubmit} />
  </div>
  );
};

export default App;