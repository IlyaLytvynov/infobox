import React, { useEffect, useState } from 'react'
import './App.css'
import { InfoBox } from './InfoBox'

const useFetch = url => {
  const [data, updateData] = useState([])
  debugger
  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
      updateData(json)
    }
    fetchData()
  }, [url])

  return data
}

function App() {
  const URL =
    'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads'
  const items = useFetch(URL)
  return <InfoBox items={items} />
}

export default App
