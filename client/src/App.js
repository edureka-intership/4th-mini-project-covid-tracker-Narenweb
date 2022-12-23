import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from "./pages/UserListedMovies";
const Container = styled.div`
      display: flex;
`;

function App() {

  return (

    <Container>
      {/* menu */}
      <BrowserRouter>

        <Routes>
          <Route path="logIn" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="player" element={<Player />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVShows />} />
          <Route path="/mylist" element={<UserListedMovies />} />
          <Route path="/" element={<Netflix />} />
        </Routes>

      </BrowserRouter>
    </Container>

  );
}

export default App;