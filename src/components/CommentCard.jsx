import { Box, Typography, Stack, Divider, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard({ comment, setComments }) {
  const { username } = useContext(UserContext);
  const isOwnComment = username === comment.author;

  return (
    <>
      <Box
        sx={{
          p: 3,
          backgroundColor: isOwnComment ? grey[50] : "",
        }}
      >
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
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle2" as="p">
              {comment.votes} votes
            </Typography>
            {isOwnComment ? (
              <CommentDeleter
                comment_id={comment.comment_id}
                setComments={setComments}
              />
            ) : (
              ""
            )}
          </Stack>
        </Stack>
      </Box>
      <Divider />
    </>
  );
}
