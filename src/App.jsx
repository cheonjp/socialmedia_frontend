import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Account from "./pages/account/Account";
// import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/myaccount" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
