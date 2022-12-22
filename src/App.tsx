import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid-cols-3 md:grid">
        <div className="col-span-1">--Profile card--</div>
        <div className="col-span-2">
          <div>--Menu--</div>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<About />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
