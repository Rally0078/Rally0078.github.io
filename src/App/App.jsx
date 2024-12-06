import '../css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Common/Layout.jsx'
import HomePage from '../Home/HomePage.jsx'
import Contacts from '../Contacts/Contacts.jsx'
import Projects from '../Projects/Projects.jsx'
import About from '../About/About.jsx'
import NoPage from '../Common/NoPage.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="contact" element={<Contacts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;