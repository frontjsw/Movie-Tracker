import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie";
import WatchList from "./pages/WatchList";
import "./styles/common/reset.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="watchlist" element={<WatchList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
