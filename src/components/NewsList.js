// Components/NewsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem"; // Ensure this component is created to display individual news items


const NewsList = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchLatestNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=deb918d0547b4a479442c7c9824e04c2');
      return response.data.articles; // Return the articles
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const saveNewsToDatabase = async (newsData) => {
    try {
      const response = await axios.post('http://localhost:3002/api/news', newsData);
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