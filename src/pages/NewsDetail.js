import { useLocation } from 'react-router-dom';

const NewsDetail = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return (
      <div>
        <h2>뉴스 정보를 불러올 수 없습니다.</h2>
        <p>목록 페이지에서 기사를 선택해 주세요.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt="뉴스 이미지" width="500" />
      )}
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        원본 기사 보기
      </a>
    </div>
  );
};

export default NewsDetail;

