import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getArticleComments } from "../utils/api";
import { Box, Paper, Typography } from "@mui/material";

export default function CommentList({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchComments(article_id) {
      try {
        setIsLoading(true);
        const { comments } = await getArticleComments(article_id);
        setIsLoading(false);
        setComments(comments);
      } catch (err) {
        setIsLoading(false);
        setError(error);
      }
    }
    fetchComments(article_id);
  }, [article_id]);

  if (isLoading) {
    return <p>Loading Comments...</p>;
  }

  if (error) {
    return (
      <div>
        <h2>Oops! - {error.response.status}</h2>
        <p>An error occured</p>
      </div>
    );
  }

  return (
    <Paper elevation={3} component="section">
      <Box sx={{ mt: 3, p: 2 }}>
        <Typography variant="h5" as="h2">
          Comments
        </Typography>
        {!comments.length ? (
          <Typography variant="h6" as="p" textAlign="center">
            Nobody has commented on this article yet
          </Typography>
        ) : (
          comments.map((comment) => {
            return (
              <article key={comment.comment_id}>
                <CommentCard comment={comment} />
              </article>
            );
          })
        )}
      </Box>
    </Paper>
  );
}
