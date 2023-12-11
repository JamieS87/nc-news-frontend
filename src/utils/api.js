import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-bdi7.onrender.com/api" });

const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

const getArticleComments = async (article_id) => {
  const response = await api.get(`/articles/${article_id}/comments`);
  return response.datal;
};

export { getArticles, getArticleComments };
