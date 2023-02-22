import { Routes, Route } from "react-router-dom";
import NewsPage from "./page/NewsPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <div className="container1">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
