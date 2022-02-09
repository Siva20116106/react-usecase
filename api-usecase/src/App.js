import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: { q: 'London', days: '3' },
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log('res...', response);
        setRes(response.data);
      })
      .catch((error) => console.log('error..', error));
  }, []);

  return <div>Response::{res}</div>;
}
