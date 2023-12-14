import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Typography, Box, Zoom } from "@mui/material";
import NotFound from "../routes/NotFound";
import ApiLoading from "./ApiLoading";

export default function ArticleList({ sort_by, order, topic, limit }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const { articles } = await getArticles({
          sort_by,
          order,
          topic,
          limit,
        });
        setIsLoading(false);
        setArticles(articles);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    fetchArticles();
  }, [sort_by, order, topic, limit]);

  if (error) {
    if (
      error.response &&
      (error.response.status === 404 || error.response.status === 400)
    ) {
      return <NotFound />;
    }
    return (
      <div>
        <h2>Oops! - {error.response.status}</h2>
        <p>An error occured</p>
      </div>
    );
  }

  if (isLoading) {
    return <ApiLoading>Loading Articles...</ApiLoading>;
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
      {articles.map((article, i) => {
        return (
          <Zoom in={true} key={article.article_id} timeout={i * 100}>
            <Box>
              <ArticleCard key={article.article_id} article={article} />
            </Box>
          </Zoom>
        );
      })}
    </section>
  );
}
