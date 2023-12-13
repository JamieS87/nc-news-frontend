import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <Card sx={{ mb: 2 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" as="h2">
          {topic.slug}
        </Typography>
        <Typography variant="body2" as="p">
          {topic.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link component={RouterLink} to={`/topics/${topic.slug}`}>
          View Articles
        </Link>
      </CardActions>
    </Card>
  );
}
