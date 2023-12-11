export default function CommentCard({ comment }) {
  return (
    <Box>
      <Stack>
        <Typography>
          by {comment.author} at {comment.created_at};
        </Typography>
        <Typography>{comment.body}</Typography>
        <Typography>{comment.votes} votes</Typography>
      </Stack>
    </Box>
  );
}
