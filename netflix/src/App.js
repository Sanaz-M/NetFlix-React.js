import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";
import "./Components.css";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<TrendingNowList title="ice-age"/>} />
      <Route path="/" element={<TrendingNowList title="the+lord+of+the+rings"/>} />
      <Route path="/" element={<TrendingNowList title="avengers"/>} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/details/:movieID" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;