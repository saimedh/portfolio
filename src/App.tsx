import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PaverasaCaseStudyPage from "./pages/PaverasaCaseStudyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Week03Page from "./pages/Week03Page";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/paverasa-ai" element={<PaverasaCaseStudyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<Week03Page />} />
        <Route path="/week-03" element={<Week03Page />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
