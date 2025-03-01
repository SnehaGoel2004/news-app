// Components/NewsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
 // Ensure this component is created to display individual news items

 //triggering redeploy

const API_URL = process.env.REACT_APP_NEWS_API_URL; // External News API
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // Your deployed backend


const NewsList = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchLatestNews = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data.articles; // Return the articles
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const saveNewsToDatabase = async (newsData) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/news`, { articles: newsData });
      console.log('News saved:', response.data);
    } catch (error) {
      console.error('Error saving news:', error);
    }
  };

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchLatestNews();
      if (news) {
        setNewsArticles(news); // Update state with fetched news
        // Save each news article to the database
        for (const article of news) {
          await saveNewsToDatabase(article);
        }
      }
    };

    getNews();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {newsArticles.map((article, index,) => (
          <li key={index}>
           
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;