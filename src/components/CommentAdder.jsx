import {
  TextField,
  Paper,
  Button,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { postArticleComment } from "../utils/api";

export default function CommentAdder({ article_id, setComments }) {
  const [expanded, setExpanded] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    if (!isValid) return;
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
      setSuccess(true);
      setIsValid(false);
    } catch (err) {
      setIsPending(false);
      setError(err);
    }
  }

  function handleCommentBodyChange(e) {
    const commentBody = e.target.value;
    if (commentBody.length < 10) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setCommentBody(commentBody);
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
    <Paper variant="outlined" sx={{ p: 2 }}>
      {success ? (
        <Alert
          onClose={() => {
            setSuccess(false);
          }}
          variant="outlined"
          severity="success"
        >
          Commented posted
        </Alert>
      ) : (
        <>
          <Typography variant="h6" as="p" sx={{ mb: 2 }}>
            Post Comment
          </Typography>
          <form>
            <TextField
              variant="outlined"
              label="Comment"
              minRows={3}
              multiline
              fullWidth
              value={commentBody}
              onChange={handleCommentBodyChange}
              error={!isValid}
              color={isValid ? "primary" : "error"}
              helperText={
                !isValid ? "Comment must be at least 10 characters" : ""
              }
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
                disabled={isPending || !isValid}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Stack>
          </form>
        </>
      )}
    </Paper>
  );
}
