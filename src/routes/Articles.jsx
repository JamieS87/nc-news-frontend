import { useSearchParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import ArticleOrderer from "../components/ArticleOrderer";
import ArticleSorter from "../components/ArticleSorter";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setSortBy(value) {
    setSearchParams((currSearchParams) => {
      return { ...Object.fromEntries(searchParams), sort_by: value };
    });
  }

  function setOrder(value) {
    setSearchParams((currSearchParams) => {
      return { ...Object.fromEntries(searchParams), order: value };
    });
  }

  return (
    <div>
      <ArticleSorter
        sort_by={searchParams.get("sort_by") || "created_at"}
        setSortBy={setSortBy}
      />
      <ArticleOrderer
        order={searchParams.get("order") || "desc"}
        setOrder={setOrder}
      />
      <ArticleList
        sort_by={searchParams.get("sort_by") || "created_at"}
        order={searchParams.get("order") || "desc"}
      />
      ;
    </div>
  );
}
