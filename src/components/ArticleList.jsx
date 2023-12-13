import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Typography, Box } from "@mui/material";

export default function ArticleList(props) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState(props.topic);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const { articles } = await getArticles(topic);
        setIsLoading(false);
        setArticles(articles);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    fetchArticles();
  }, [topic]);

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
