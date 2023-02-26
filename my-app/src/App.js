import { Routes, Route } from "react-router-dom";
import NewsPage from "./page/NewsPage";
import Layout from "./layout/Layout";
import Offer from "./page/Offer";

function App() {
  return (
    <>
      <div className="container1">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
