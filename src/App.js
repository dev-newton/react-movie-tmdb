import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import "App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Movies} />
      <Route path="/movie/:id" exact component={MovieDetails} />
    </BrowserRouter>
  );
};

export default App;
