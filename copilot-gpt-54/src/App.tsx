import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<Home />} index />
        <Route element={<About />} path="about" />
        <Route element={<Experience />} path="experience" />
        <Route element={<Skills />} path="skills" />
        <Route element={<Projects />} path="projects" />
        <Route element={<Contact />} path="contact" />
      </Route>
    </Routes>
  );
}

export default App;
