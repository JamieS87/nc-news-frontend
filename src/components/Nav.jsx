import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Stack direction="row" as="nav">
      <Box sx={{ mr: 2 }}>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/articles">Articles</Link>
      </Box>
    </Stack>
  );
}
