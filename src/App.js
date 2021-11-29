import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import store from "./store";
import "util.css";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" exact component={Movies} />
        <Route path="/movie/:id" exact component={MovieDetails} />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
