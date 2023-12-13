import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";
import { Typography, Box } from "@mui/material";

export default function TopicList() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      try {
        setIsLoading(true);
        const { topics } = await getTopics();
        setIsLoading(false);
        setTopics(topics);
      } catch (err) {
        setIsLoading(false);
        setError(error);
      }
    }
    fetchTopics();
  }, []);

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Typography variant="h5" component="p">
          Loading Topics...
        </Typography>
      </Box>
    );
  }

  if (!topics.length) {
    return (
      <Typography variant="h5" as="p">
        No topics to show
      </Typography>
    );
  }

  return (
    <section>
      {topics.map((topic) => {
        return (
          <article key={topic.slug}>
            <TopicCard topic={topic} />
          </article>
        );
      })}
    </section>
  );
}
