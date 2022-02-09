import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [res, setRes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://air-quality.p.rapidapi.com/current/airquality',
      params: {lon: '-73.00597', lat: '40.71427'},
      headers: {
        'x-rapidapi-host': 'air-quality.p.rapidapi.com',
        'x-rapidapi-key': 'd5fc714e7amsh15a174df2e85fc8p1e5753jsn5aa3857b360b'
      }
    };
    

    axios
      .request(options)
      .then((response) => {
        console.log('res...', response);
        setRes(response.data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return <><div>Response::{res.length}</div><div>{error}</div></>;
}
