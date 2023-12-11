import { patchArticleVotes } from "../utils/api";
import { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ArticleVotes({ article_id, ...props }) {
  const [votes, setVotes] = useState(props.votes);
  const [hasUpVote, setHasUpVote] = useState(false);
  const [hasDownVote, setHasDownVote] = useState(false);

  async function addUpVote() {
    try {
      setHasUpVote(true);
      setVotes((currVotes) => currVotes + 1);
      await patchArticleVotes(article_id, 1);
    } catch (err) {
      setVotes((currVotes) => currVotes - 1);
      setHasUpVote(false);
    }
  }

  async function removeUpVote() {
    try {
      setVotes((currVotes) => currVotes - 1);
      setHasUpVote(false);
      await patchArticleVotes(article_id, -1);
    } catch (err) {
      setVotes((currVotes) => currVotes + 1);
      setHasUpVote(true);
    }
  }

  async function addDownVote() {
    try {
      setHasDownVote(true);
      setVotes((currVotes) => currVotes - 1);
      await patchArticleVotes(article_id, -1);
    } catch (err) {
      setVotes((currVotes) => currVotes + 1);
      setHasDownVote(false);
    }
  }

  async function removeDownVote() {
    try {
      setHasDownVote(false);
      setVotes((currVotes) => currVotes + 1);
      await patchArticleVotes(article_id, 1);
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
    <Stack direction="row" gap={2}>
      <IconButton aria-label="upvote" onClick={handleUpVote}>
        <ArrowUpwardIcon sx={{ color: hasUpVote ? "red" : "" }} />
      </IconButton>
      <p>{votes}</p>
      <IconButton aria-label="downvote" onClick={handleDownVote}>
        <ArrowDownwardIcon sx={{ color: hasDownVote ? "blue" : "" }} />
      </IconButton>
    </Stack>
  );
}
