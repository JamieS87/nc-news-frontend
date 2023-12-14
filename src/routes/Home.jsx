import { Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <>
      <Stack direction="row">
        <Typography>Latest Articles</Typography>
        <Box sx={{ ml: "auto" }}>
          <Link to="/articles">All Articles</Link>
        </Box>
      </Stack>
      <ArticleList sort_by="created_at" order="desc" limit={3} />
    </>
  );
}
