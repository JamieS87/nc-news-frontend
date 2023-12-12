import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";
import { Box, Paper, Typography, Stack, Link, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Article({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchArticle(article_id) {
      try {
        setIsLoading(true);
        const { article } = await getArticle(article_id);
        setArticle(article);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }
    fetchArticle(article_id);
  }, [article_id]);

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
        <h2>Loading Article...</h2>
      </div>
    );
  }

  return (
    <Paper sx={{ p: 2, mt: 3 }} elevation={3}>
      <Stack>
        <Stack direction="row">
          <Typography variant="subtitle2" as="p">
            <Link component={RouterLink} to={`/users/${article.author}`}>
              {article.author}
            </Link>{" "}
            at {article.created_at} in {article.topic}
          </Typography>
        </Stack>
        <Typography variant="h5" as="h2" sx={{ my: 1 }}>
          {article.title}
        </Typography>
        <Box
          sx={{ mb: 3, p: 1 }}
          src={article.article_img_url}
          component="img"
          alt="article image"
        />
        <Typography variant="body1">{article.body}</Typography>
        <Divider sx={{ mt: 2 }} />
        <Stack direction="row" sx={{ mt: 2 }}>
          <Typography variant="body2">{article.votes} votes</Typography>
          <Typography variant="body2" sx={{ mx: "auto" }}>
            {article.comment_count} comments
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
