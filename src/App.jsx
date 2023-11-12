import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import {Home, About, Project, Contact} from "./pages";
const App = () => {
     return (
          <main className="bg-slate-300/20 h-full">
               <Router>
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/projects" element={<Project />} />
                         <Route path="/contact" element={<Contact />} />
                    </Routes>
               </Router>
          </main>
     );
};

export default App;
