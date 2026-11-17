import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import WatchList from "./pages/WatchList";
import "./styles/styles.scss";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="watchlist" element={<WatchList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
