import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./PagesMyFood/Home";
import FourOFour from "./PagesMyFood/FourOFour";
import Index from "./PagesMyFood/Index";
import Show from "./PagesMyFood/Show";
import New from "./PagesMyFood/New";
import Edit from "./PagesMyFood/Edit";
import WeightIndex from "./PagesMyWeight/Index";
import NewLog from "./PagesMyWeight/New";
import EditLog from "./PagesMyWeight/Edit";
import ShowLog from "./PagesMyWeight/Show";
import HomeLogin from "./PagesLogin/HomeLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<HomeLogin />} />
            <Route path="/myfoods" element={<Index />} />
            <Route path="/myweight/logs" element={<WeightIndex />} />
            <Route path="/myfoods/:id" element={<Show />} />
            <Route path="/myweight/logs/:id" element={<ShowLog />} />
            <Route path="/myfoods/new" element={<New />} />
            <Route path="/myweight" element={<NewLog />} />
            <Route path="/myfoods/:id/edit" element={<Edit />} />
            <Route path="/myweight/logs/:id/edit" element={<EditLog />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
