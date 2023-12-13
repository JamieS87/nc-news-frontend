import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import { Typography } from "@mui/material";

export default function SingleTopic() {
  const { topic_slug } = useParams();

  return <ArticleList topic={topic_slug} />;
}
