

import React, { useState, useEffect } from 'react';
import domi from "../assets/dom.jpg";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import load from "../assets/load.gif"
import 'bootstrap-icons/font/bootstrap-icons.css';

function Tech() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('tech'); // Default search term


  const article_number = Math.floor(Math.random() * 25) + 30; // Random number between 50 and 85

  async function getNews() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=1ecfb3ad6c9b42ca9fb84a9b5813ebc9&pageSize=${article_number}`
      );

      const data = await response.json();
      setNewsData(data.articles);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  const handleSearch = () => {
    getNews();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error container-fluid p-5 bg-dark fw-thick fs-1">Error: {error} please ensure device is conected to the internet<img src={load} alt="load" />
</div>;
  }


  return (
    <>
<h3 className="text-light fs-1 bg-dark m-0 p-4 text-center">Tech News</h3>

<div className="home-container bg-dark">
{/* Search section */}
<div className="search-section">
  <input
    type="text"
    // ref={inputRef}
 
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    placeholder="Search news…"
    onKeyDown={(e) => {
      if (e.key === 'Enter') handleSearch();
    }}
    className="search-input btn bg-dark btn-outline-primary text-light shadow-info rounded-5"
  />
  <button onClick={handleSearch} className="search-button bg-primary rounded-5">
  <i className="bi bi-search text-info me-1 "></i>
    Search
  </button>

</div>
  <h1></h1>

{/* Show message if no news */}
{newsData.length === 0 && <div className="no-news">No news found.</div>}


{/* News Articles */}
{newsData.map((newsItem, index) => (
    <a href={newsItem.url} target="_blank" rel="noreferrer" className="news-link">
      <div key={index} className="news-card  text-light out border-none mb-3">
        {newsItem.urlToImage && (
          <img src={newsItem.urlToImage} alt="" className="news-image p-1" />
        )}
        <div className="news-content p-1">
          <h2 className="news-title text-light ">{newsItem.title}</h2>
          <p className="news-description text-light">{newsItem.description}...</p>
        </div>
      </div>
    </a>
            ))}
          </div>
     
    </>
  );
}

export default Tech;