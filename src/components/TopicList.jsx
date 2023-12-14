import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";
import { Typography, Box } from "@mui/material";
import NotFound from "../routes/NotFound";
import ApiLoading from "./ApiLoading";

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
        setError(err);
      }
    }
    fetchTopics();
  }, []);

  if (isLoading) {
    return <ApiLoading>Loading Topics...</ApiLoading>;
  }

  if (error) {
    return (
      <div>
        <h2>Oops! - {error.message || error.response.status}</h2>
        <p>An error occured</p>
      </div>
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
