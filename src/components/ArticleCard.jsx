import { Card, CardContent, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { article_id, title, topic, author, created_at, votes, comment_count } =
    article;
  return (
    <article>
      <Card sx={{ mb: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="subtitle2" as="p">
            by {author} at {created_at} in {topic}
          </Typography>
          <Typography variant="h6" as="h2" sx={{ my: 2 }}>
            {title}
          </Typography>
          <Link component={RouterLink} to={`/articles/${article_id}`}>
            Read Article
          </Link>
          <Typography variant="subtitle2" as="p" sx={{ mt: 1 }}>
            {votes} votes {comment_count} comments
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
}
