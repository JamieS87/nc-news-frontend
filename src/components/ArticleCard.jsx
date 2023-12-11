import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { article_id, title, topic, author, created_at, votes, comment_count } =
    article;
  return (
    <Card as="article">
      <CardContent>
        <Typography variant="h4" as="h3">
          {title}
        </Typography>
        <Typography variant="subtitle2" as="p">
          by {author} at {created_at} in {topic}
        </Typography>
        <Link to={`/articles/${article_id}`}>Read Article</Link>
        <Typography variant="subtitle2">
          {votes} votes {comment_count} comments
        </Typography>
      </CardContent>
    </Card>
  );
}
