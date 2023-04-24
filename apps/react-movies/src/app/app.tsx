import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Actor } from './pages/actor';
import { Movie } from './pages/movie';
import { Genre } from './pages/genre';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/actor/:actorID"
        element={<Actor />}
      />
      <Route
        path="/movie/:movieID"
        element={<Movie />}
      />
      <Route
        path="/genre/:genreID"
        element={<Genre />}
      />
    </Routes>
  );
}

export default App;
