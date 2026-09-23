.home-container {
    max-width: 1500px;
    text-align: center;
    background-color: #2b2b2b;
    padding: 0 200px ;
  }
  
  .search-section {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .search-input {
    flex: 1;
    max-width: 300px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .search-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .loading-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .spinner {
    margin: auto;
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top: 6px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  .no-news {
    text-align: center;
    color: #666;
  }
  
  .news-card {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .news-link {
    text-decoration: none;
    color: inherit;
  }
  
  .news-title {
    margin-bottom: 10px;
  }
  
  .news-image {
    max-width: 100%;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .news-description {
    color: #9b9b9b;
  }
  