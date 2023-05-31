import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/NavBar/NavBar";
import Home from "./Pages/Dashboard/Home";
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
import FooterPage from "./Pages/Footer/FooterPage";
import OnboardingPage1 from "./Pages/OnboardingPage1/OnboardingPage1";
import OnboardingPage2 from "./Pages/OnbardingPage2/OnboardingPage2";
import OnboardingPage3 from "./Pages/OnboardingPage3/OnboardingPage3";
import OnboardingPage4 from "./Pages/OnboardingPage4/OnboardingPage4";
import OnboardingPage5 from "./Pages/OnboardingPage5/OnboardingPage5";
import OnboardingPage6 from "./Pages/OnboardingPage6/OnboardingPage6";
import OnboardingPage7 from "./Pages/OnboardingPage7/OnboardingPage7";

const API = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/welcome" element={<OnboardingPage1 />} />
            <Route path="/welcome/about-you" element={<OnboardingPage2 />} />
            <Route
              path="/welcome/target-weight"
              element={<OnboardingPage3 />}
            />
            <Route
              path="/welcome/activity-level"
              element={<OnboardingPage4 />}
            />
            <Route
              path="/welcome/energy-target"
              element={<OnboardingPage5 />}
            />
            <Route
              path="/welcome/exercise-target"
              element={<OnboardingPage6 />}
            />
            <Route path="/welcome/completed" element={<OnboardingPage7 />} />
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
        </main>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
