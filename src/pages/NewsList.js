import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../api/news';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const getNews = async () => {
      try {
      const data = await fetchNews(category);
      console.log('뉴스 데이터 확인:', data); 
      setArticles(data);
    } catch (error) {
      console.error('뉴스 불러오기 실패:', error); 
    }
  };
  getNews();
  }, [category]);

  const categories = ['general', 'technology', 'health', 'science', 'sports', 'entertainment'];

  return (
    <div>
      <h2>뉴스</h2>
      <div>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} style={{ margin: '5px' }}>
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <Link to={`/news/${index}`} state={{ article }}>
              <strong>{article.title}</strong>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
