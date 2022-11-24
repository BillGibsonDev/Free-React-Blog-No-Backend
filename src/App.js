//router
import { Routes, Route } from "react-router-dom";

// styles
import { GlobalStyles } from "./GlobalStyles";

// components
import { Nav } from "./components/Nav"; 

// pages
import { Home } from "./pages/Home";
import { PostPage } from "./pages/PostPage.js";
import { AuthorPage } from "./pages/AuthorPage";
import { About } from "./pages/About";
import { AuthorsPage } from "./pages/AuthorsPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/posts/:id' exact element={<PostPage />} />
        <Route path='/authorlist' exact element={<AuthorsPage />} />
        <Route path='/authors/:name' exact element={<AuthorPage />} />
      </Routes>
    </>
  );
}

export default App;
