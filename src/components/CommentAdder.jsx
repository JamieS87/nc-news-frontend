import { TextField, Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { postArticleComment } from "../utils/api";

export default function CommentAdder({ article_id, setComments }) {
  const [expanded, setExpanded] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit() {
    setIsPending(true);
    const commentData = {
      username: "grumpy19",
      body: commentBody,
    };
    try {
      setIsPending(true);
      const { comment } = await postArticleComment(article_id, commentData);
      setIsPending(false);
      setCommentBody("");
      setComments((currComments) => [comment, ...currComments]);
    } catch (err) {
      setIsPending(false);
      setError(err);
    }
  }

  if (!expanded) {
    return (
      <Button
        fullWidth
        variant="outlined"
        color="info"
        onClick={() => setExpanded(true)}
      >
        Post Comment
      </Button>
    );
  }

  if (error) {
    return (
      <Stack alignItems="center" sx={{ p: 6 }}>
        <Typography variant="h6" as="p" sx={{ mb: 1, mt: 2 }}>
          There was an error posting your comment
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setError(false)}
        >
          Try Again
        </Button>
      </Stack>
    );
  }

  return (
    <Box>
      <form>
        <TextField
          variant="outlined"
          label="Comment"
          minRows={3}
          multiline
          fullWidth
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <Stack
          direction="row"
          gap={1}
          sx={{ mt: 1 }}
          justifyContent={"flex-end"}
        >
          <Button
            color="info"
            variant="outlined"
            onClick={() => setExpanded(false)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            disabled={isPending}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
