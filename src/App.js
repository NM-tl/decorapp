import './Assets/css/style.css';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './Pages/Home/home';
import { About } from './Pages/About/about';
import { Calculator } from './Pages/Calculator/calculator';
import { Notfound404 } from './Pages/NotFound/notfound404';
import { News } from  './Pages/News/news';
import {Header} from "./Components/Header/header";

function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="*" element={<Notfound404 />} />
          </Routes>
      </div>
  );
}

export default App;
