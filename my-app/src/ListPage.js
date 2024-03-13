// ListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
function ListPage({ favorites, setFavorites }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
    useEffect(() => {
    
    const fetchData = async () => {
    const result = await axios(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
    if(page==1){    
        setItems(result.data);
    }else{
        setItems(prevItems => [...prevItems, ...result.data]);
    }
        /* setItems(prevItems => {
            const uniqueItems = new Set([...prevItems, ...result.data]);
            console.log(uniqueItems);
            return Array.from(uniqueItems);
        }); */
        console.log(result.data);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
      
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="list-page">
      <h1>List Page</h1>
      <Link to="/">Back to Dashboard</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>ID: {item.id}</div>
            <div>Title: {item.title}</div>
            <span>Image:</span>
            <figure className="img"><img src={item.thumbnailUrl} ></img></figure>
            <button
              onClick={() => {
                const exists = favorites.find(fav => fav.id === item.id);
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
  );
}

export default ListPage;