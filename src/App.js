import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import MovieDetail from "./pages/moviedetail/MovieDetail";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="movie">
              <Route index element={<Movie />} />
              <Route path=":id" element={<MovieDetail />} />
            </Route>
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
