import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";
import "./Components.css";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Sorting'
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import Sorting from "./components/Sorting";


const App = () => (
  <BrowserRouter>
  <MyNavBar />
  <Sorting />
    <Routes>
      <Route path="/" element={<TrendingNowList title={"Ice Age"}/>} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/details/:movieID" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;