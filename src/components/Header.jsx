import { Typography, AppBar, Toolbar, Container } from "@mui/material";
export default function Header() {
  return (
    <AppBar elevation={1}>
      <Container disableGutters>
        <Toolbar>
          <Typography variant="h5" as="h1" fontWeight="bold">
            NC News
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
