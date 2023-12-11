import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./routes/Articles";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./routes/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Nav />
        <Routes>
          <Route path="/articles" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
