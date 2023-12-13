import { useSearchParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import ArticleOrderer from "../components/ArticleOrderer";
import ArticleSorter from "../components/ArticleSorter";
import { Stack } from "@mui/material";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setSortBy(value) {
    setSearchParams((currSearchParams) => {
      return { ...Object.fromEntries(currSearchParams), sort_by: value };
    });
  }

  function setOrder(value) {
    setSearchParams((currSearchParams) => {
      return { ...Object.fromEntries(currSearchParams), order: value };
    });
  }

  return (
    <div>
      <Stack direction="row" gap={2} sx={{ mb: 2 }}>
        <ArticleSorter
          sort_by={searchParams.get("sort_by") || "created_at"}
          setSortBy={setSortBy}
        />
        <ArticleOrderer
          order={searchParams.get("order") || "desc"}
          setOrder={setOrder}
        />
      </Stack>
      <ArticleList
        sort_by={searchParams.get("sort_by") || "created_at"}
        order={searchParams.get("order") || "desc"}
      />
    </div>
  );
}
