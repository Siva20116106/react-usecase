import './App.css';
import Tabs from "./Tabs.js";
import New from "./New.js";
import Complete from "./Complete.js";
import Later from "./Later.js";
import Math from "./Math.js";
import NotFound from "./NotFound.js";
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
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
