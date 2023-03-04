import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/NavBar";
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
import LandingPage from "./Pages/LandingPage/LandingPage";
import Welcome from "./Components_Onboarding/Welcome";
import AboutYou from "./Components_Onboarding/AboutYou";
import GoalWeight from "./Components_Onboarding/GoalWeight";

const API = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/welcome/about-you" element={<AboutYou />} />
            <Route path="/welcome/target-weight" element={<GoalWeight />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myfoods" element={<Index />} />
            <Route path="/myweight/logs" element={<WeightIndex />} />
            <Route path="/myfoods/:id" element={<Show />} />
            <Route path="/myweight/logs/:id" element={<ShowLog />} />
            <Route path="/myfoods/new" element={<New />} />
            <Route path="/myweight" element={<NewLog />} />
            <Route path="/myfoods/:id/edit" element={<Edit />} />
            <Route path="/myweight/logs/:id/edit" element={<EditLog />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
          {/* <Footer /> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
