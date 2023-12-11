import { useParams } from "react-router-dom";
import Article from "../components/Article.jsx";
import CommentList from "../components/CommentList.jsx";
export default function SingleArticle() {
  const { article_id } = useParams();

  return (
    <section>
      <Article article_id={article_id} />
      <CommentList article_id={article_id} />
    </section>
  );
}
