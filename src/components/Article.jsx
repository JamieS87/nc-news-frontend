import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  const { article_id, title, topic, author, created_at } = article;
  return (
    <Card as="article">
      <CardContent>
        <Typography variant="h4" as="h3">
          {title}
        </Typography>
        <span>
          by {author} at {created_at} in {topic}
        </span>
        <Link path={`/articles/${article_id}`}>Read Article</Link>
      </CardContent>
    </Card>
  );
}
