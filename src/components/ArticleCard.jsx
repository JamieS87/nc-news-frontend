import { Card, CardContent, Typography, Link, Avatar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TimeAgo from "react-timeago";

export default function ArticleCard({ article }) {
  const { article_id, title, topic, author, created_at, votes, comment_count } =
    article;
  return (
    <article>
      <Card sx={{ mb: 3 }} variant="outlined">
        <CardContent>
          <Typography
            variant="subtitle2"
            as="p"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Avatar sx={{ width: 32, height: 32 }} component="span">
              {author[0].toUpperCase()}
            </Avatar>
            <Typography variant="body2" component="span" fontWeight="bold">
              {author}
            </Typography>{" "}
            <TimeAgo date={created_at} /> in {topic}
          </Typography>
          <Typography variant="h6" as="h2" sx={{ my: 2 }} fontWeight="bold">
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
