import { Link } from "react-router-dom";

export default function Article({ article }) {
  const { article_id, title, topic, author, created_at } = article;
  return (
    <article>
      <h3>{title}</h3>
      <span>
        by {author} at {created_at} in {topic}
      </span>
      <Link path={`/articles/${article_id}`}>Read Article</Link>
    </article>
  );
}
