import ArticleList from "../components/ArticleList";
import ArticleOrderer from "../components/ArticleOrderer";
import ArticleSorter from "../components/ArticleSorter";

export default function Articles() {
  return (
    <div>
      <ArticleSorter />
      <ArticleOrderer />
      <ArticleList />;
    </div>
  );
}
