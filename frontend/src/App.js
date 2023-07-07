import Landing from "./routes/landing";
import Store from "./routes/store";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Blog from "./routes/Blog";
import React from 'react'
import Terms from './routes/Terms';
import Privacy from './routes/Privacy';
function App() {
  const email = "support@Quatsch.com"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/terms" element={<Terms/>} email={email}/>
        <Route path="/privacy" element={<Privacy/>} email={email}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
