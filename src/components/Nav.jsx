import { Box, Stack, Link, Toolbar, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <Container disableGutters>
      <Toolbar>
        <Stack direction="row" as="nav" gap={2} sx={{ mt: 7, py: 3 }}>
          <Box>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </Box>
          <Box>
            <Link component={RouterLink} to="/articles">
              Articles
            </Link>
          </Box>
          <Box>
            <Link component={RouterLink} to="/topics">
              Topics
            </Link>
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  );
}
