import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./routes/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
