import { useState } from "react";
import CommentCard from "./CommentCard";
import { getArticleComments } from "../utils/api";

export default function CommentList({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchComments(article_id) {
      try {
        setIsLoading(true);
        const { comments } = await getArticleComments(article_id);
        setIsLoading(false);
        setComments(comments);
      } catch (err) {
        setIsLoading(false);
        setError(error);
      }
    }
    fetchComments(article_id);
  }, [article_id]);

  if (isLoading) {
    return <p>Loading Comments...</p>;
  }

  if (error) {
    return (
      <div>
        <h2>Oops! - {error.response.status}</h2>
        <p>An error occured</p>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
}
