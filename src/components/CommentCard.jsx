import { Box, Typography, Stack, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function CommentCard({ comment }) {
  return (
    <>
      <Box sx={{ px: 2, my: 2 }}>
        <Stack>
          <Typography sx={{ mb: 1 }} variant="subtitle2" as="p">
            <Link component={RouterLink} to={`/users/${comment.author}`}>
              {comment.author}
            </Link>{" "}
            at {comment.created_at}
          </Typography>
          <Typography sx={{ mb: 1 }} variant="body2">
            {comment.body}
          </Typography>
          <Typography variant="subtitle2" as="p">
            {comment.votes} votes
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
