import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./routes/Articles";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./routes/SingleArticle";
import Topics from "./routes/Topics";
import SingleTopic from "./routes/SingleTopic";
import NotFound from "./routes/NotFound";
import "./App.css";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/topics/:topic_slug" element={<SingleTopic />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
