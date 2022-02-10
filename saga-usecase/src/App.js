import './App.css';
import Tabs from "./components/Tabs.js";
import New from "./components/New.js";
import Complete from "./components/Complete.js";
import Later from "./components/Later.js";
import Math from "./components/Math.js";
import Weather from "./components/Weather.js";
import NotFound from "./components/NotFound.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Tabs/>
      <div className='pl'>
        <Routes>
            <Route path="/" element={<New/>} />
            <Route path="/c" element={<Complete/>} />
            <Route path="/l" element={<Later/>} />
            <Route path="/m" element={<Math/>} />
            <Route path="/w" element={<Weather/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
