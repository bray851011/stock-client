import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Pricing from "./routes/pricing/pricing.component";
import Auth from "./routes/authentication/authentication.component";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/auth" element={ <Auth /> } />
      </Route>
    </Routes>
  );
}

export default App;
