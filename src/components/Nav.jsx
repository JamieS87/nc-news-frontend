import { Box, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <Stack direction="row" as="nav" sx={{ my: 3 }}>
      <Box sx={{ mr: 2 }}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Box>
      <Box>
        <Link component={RouterLink} to="/articles">
          Articles
        </Link>
      </Box>
    </Stack>
  );
}
