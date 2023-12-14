import { useParams } from "react-router-dom";
import Article from "../components/Article.jsx";
import CommentList from "../components/CommentList.jsx";
import UserContext from "../context/UserContext.js";
export default function SingleArticle() {
  const { article_id } = useParams();

  return (
    <section>
      <UserContext.Provider value={{ username: "grumpy19" }}>
        <Article article_id={article_id} />
      </UserContext.Provider>
    </section>
  );
}
