import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import { GalleryProvider } from "./context/GalleryContext";

function App() {
  return (
    <GalleryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="gallery" element={<Gallery />}></Route>
        </Routes>
      </Router>
    </GalleryProvider>
  );
}

export default App;
