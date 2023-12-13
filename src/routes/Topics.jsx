import TopicList from "../components/TopicList";
import { Typography } from "@mui/material";
export default function Topics() {
  return (
    <>
      <Typography variant="h4" as="h2">
        Topics
      </Typography>
      <TopicList />
    </>
  );
}
