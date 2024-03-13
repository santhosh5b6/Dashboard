import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
function Dashboard({ favorites, setFavorites }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10');
      setItems(result.data);
    };
    fetchData();
  }, []);

  const handleRemoveFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    console.log("remove Faverate id="+id);
    setFavorites(newFavorites);
  };

  return (
    <div className="dashboard">
    <div className="col">
        <h1>Dashboard</h1><br/>
        <Link to="/list">Go to List Page</Link>
        <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>ID: {item.id}</div>
            <div>Title: {item.title}</div>
            <button
              onClick={() => {
                const exists = favorites.find(fav => fav.id === item.id);
                console.log("add faverate id="+item.id);
                if (!exists) setFavorites([...favorites, item]);
              }}
              disabled={favorites.some(fav => fav.id === item.id)}
            >
              {favorites.some(fav => fav.id === item.id) ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
      </div>
      <div className="col">
      <h2>Favorites</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.id}>
            <div>ID: {fav.id}</div>
            <div>Title: {fav.title}</div>

            <button onClick={() => handleRemoveFavorite(fav.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Dashboard;