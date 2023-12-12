import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-bdi7.onrender.com/api" });

const getArticles = async () => {
  const response = await api.get("/articles");
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

const postArticleComment = async (articleId, data) => {
  const response = await api.post(`/articles/${articleId}/comments`, data);
  return response.data;
};

const patchArticleVotes = async (articleId, votes) => {
  const response = await api.patch(`/articles/${articleId}`, {
    inc_votes: votes,
  });
  return response.data;
};

export { getArticles, getArticle, getArticleComments, postArticleComment, patchArticleVotes };
