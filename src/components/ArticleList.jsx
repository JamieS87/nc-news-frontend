import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Typography, Box } from "@mui/material";

export default function ArticleList({ sort_by, order, topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const { articles } = await getArticles({ sort_by, order, topic });
        setIsLoading(false);
        setArticles(articles);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    fetchArticles();
  }, [sort_by, order, topic]);

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
      <Box textAlign="center">
        <Typography variant="h5" component="p">
          Loading Articles...
        </Typography>
      </Box>
    );
  }

  if (!articles.length) {
    return (
      <>
      <Typography variant="h5" as="p">
        No articles to show
      </Typography>
      <Box textAlign="center">
        <Typography variant="h5" component="p">
          Loading Articles...
        </Typography>
      </Box>
      </>
    );
  }

  if (!articles.length) {
    return (
      <Typography variant="h5" as="p">
        No articles to show
      </Typography>
    );
  }

  return (
    <section>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
