import { Paper, Typography, Stack, Box } from "@mui/material";

export default function ApiLoading({ children }) {
  return (
    <Paper variant="outlined" sx={{ p: 10 }}>
      <Stack alignItems="center" gap={5}>
        <Box>
          <Typography variant="h4" as="h2" fontWeight="bold" sx={{ mb: 1 }}>
            {children}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">Please wait</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
