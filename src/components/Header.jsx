import { Typography, Box } from "@mui/material";
export default function Header() {
  return (
    <header>
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" as="h1">
          NC News
        </Typography>
      </Box>
    </header>
  );
}
