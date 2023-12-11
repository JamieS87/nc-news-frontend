import { useParams } from "react-router-dom";
import Article from "../components/Article.jsx";
export default function SingleArticle() {
  const { article_id } = useParams();

  return <Article article_id={article_id} />;
}
