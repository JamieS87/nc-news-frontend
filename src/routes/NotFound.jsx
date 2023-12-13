import { Paper, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Paper variant="outlined" sx={{ p: 10 }}>
      <Stack alignItems="center" gap={5}>
        <Box>
          <Typography variant="h4" as="h2" fontWeight="bold" sx={{ mb: 1 }}>
            404 - Page Not Found
          </Typography>
          <Typography variant="subtitle2" as="p" textAlign="center">
            "Peter! You've lost the news!"
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            The page you tried to access does not exist
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
