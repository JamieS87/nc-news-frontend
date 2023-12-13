import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-bdi7.onrender.com/api" });

const getArticles = async (topic) => {
  const response = await api.get("/articles", {
    params: topic ? { topic } : "",
  });
  return response.data;
};

const getArticle = async (articleId) => {
  const response = await api.get(`/articles/${articleId}`);
  return response.data;
};

const getArticleComments = async (articleId) => {
  const response = await api.get(`/articles/${articleId}/comments`);
  return response.data;
};

const patchArticleVotes = async (articleId, votes) => {
  const response = await api.patch(`/articles/${articleId}`, {
    inc_votes: votes,
  });
  return response.data;
};

const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data;
};

export {
  getArticles,
  getArticle,
  getArticleComments,
  patchArticleVotes,
  getTopics,
};
