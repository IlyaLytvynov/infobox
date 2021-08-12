import React, { useEffect, useState } from 'react';
import './App.css';
import { InfoBox } from './InfoBox';

const useFetch = url => {
  const [data, updateData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json);
    }
    fetchData();
  }, [url]);

  return data;
};

function App() {
  const URL =
    'https://boring-fe.herokuapp.com/react-hw-1';
  const items = useFetch(URL);
  if (!items || items.length === 0) {
    return <h2>Sorry, something goes wrong :(</h2>;
  }
  return <div class="App-wrapper">
    <InfoBox items={items} />
  </div>;
}

export default App;
