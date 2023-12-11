import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Article from "./Article";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const { articles } = await getArticles();
        setIsLoading(false);
        setArticles(articles);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    fetchArticles();
  }, []);

  if (error) {
    return (
      <div>
        <h2>Oops! - {error.response.status}</h2>
        <p>An error occured</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading Articles...</h2>
      </div>
    );
  }

  return (
    <div>
      {articles.map((article) => {
        return <Article key={article.article_id} article={article} />;
      })}
    </div>
  );
}
