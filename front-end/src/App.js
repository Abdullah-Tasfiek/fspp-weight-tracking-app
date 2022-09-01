import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./PagesMyFood/Home";
import FourOFour from "./PagesMyFood/FourOFour";
import Index from "./PagesMyFood/Index";
import Show from "./PagesMyFood/Show";
import New from "./PagesMyFood/New";
import Edit from "./PagesMyFood/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myfoods" element={<Index />} />
            <Route path="/myfoods/:id" element={<Show />} />
            <Route path="/myfoods/new" element={<New />} />
            <Route path="/myfoods/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
