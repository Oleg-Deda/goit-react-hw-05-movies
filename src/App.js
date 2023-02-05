import { Navigation } from "components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";

function App() {
  return (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="movies" element={<Movies/>}/>
      <Route path="movies/:id" element={<MovieDetails/>}/>
       <Route path='cast' element={<Cast/>} />
       <Route path='reviews' element={<Reviews/>} />
      
    </Routes>
  </div>
  ); 
  }

  export default App;