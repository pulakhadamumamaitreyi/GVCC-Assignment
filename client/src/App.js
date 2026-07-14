import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchVideo from "./pages/WatchVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
