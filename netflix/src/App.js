import "./App.css";
import TvShows from "./components/TvShows";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";
import Footer from "./components/Footer.jsx";
import "./Components.css";
import MyNavBar from "./components/MyNavBar";


function App() {
  return (
    <div>
      <MyNavBar />
      <TvShows />
      <TrendingNowList  />
      <Footer />
    </div>
  );
}

export default App;