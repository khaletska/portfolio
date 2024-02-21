import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Main from './pages/main/main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
