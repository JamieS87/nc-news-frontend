import { patchArticleVotes } from "../utils/api";
import { useState } from "react";
import { Stack, Button } from "@mui/material";

export default function ArticleVotes({ article_id, ...props }) {
  const [votes, setVotes] = useState(props.votes);
  const [hasUpVote, setHasUpVote] = useState(false);
  const [hasDownVote, setHasDownVote] = useState(false);

  function addUpVote() {
    try {
      setHasUpVote(true);
      setVotes((currVotes) => currVotes + 1);
      patchArticleVotes(article_id, 1);
    } catch (err) {
      setVotes((currVotes) => currVotes - 1);
      setHasUpVote(false);
    }
  }

  function removeUpVote() {
    try {
      setVotes((currVotes) => currVotes - 1);
      setHasUpVote(false);
      patchArticleVotes(article_id, -1);
    } catch (err) {
      setVotes((currVotes) => currVotes + 1);
      setHasUpVote(true);
    }
  }

  function addDownVote() {
    try {
      setHasDownVote(true);
      setVotes((currVotes) => currVotes - 1);
      patchArticleVotes(article_id, -1);
    } catch (err) {
      setVotes((currVotes) => currVotes + 1);
      setHasDownVote(false);
    }
  }

  function removeDownVote() {
    try {
      setHasDownVote(false);
      setVotes((currVotes) => currVotes + 1);
      patchArticleVotes(article_id, 1);
    } catch (err) {
      setVotes((currVotes) => currVotes - 1);
      setHasDownVote(true);
    }
  }

  function handleUpVote() {
    if (hasUpVote) {
      removeUpVote();
    } else if (hasDownVote) {
      removeDownVote();
      addUpVote();
    } else {
      addUpVote();
    }
  }

  function handleDownVote() {
    if (hasDownVote) {
      removeDownVote();
    } else if (hasUpVote) {
      removeUpVote();
      addDownVote();
    } else {
      addDownVote();
    }
  }
  return (
    <Stack direction="row">
      <Button aria-label="upvote" onClick={handleUpVote}>
        Upvote
      </Button>
      <p>{votes}</p>
      <Button aria-label="downvote" onClick={handleDownVote}>
        Downvote
      </Button>
    </Stack>
  );
}
