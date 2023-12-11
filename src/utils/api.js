import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-bdi7.onrender.com/api" });

const getArticles = async () => {
  const response = await api.get("/articles");
  console.log("Got API Articles", response.data);
  return response.data;
};

export { getArticles };
