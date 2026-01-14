import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import AdminPage from "./pages/AdminPage";
import "./styles/app.scss";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./store/counterSlice";
import MainLayout from "./layout/MainLayout";

const App = () => {
  // const selectore = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      {/* <h1>Home</h1>
    <button onClick={() => dispatch(increment())} className="btn1">green</button>
    <button onClick={() => dispatch(decrement())} className="btn2">blue</button>
    <button onClick={() => dispatch(incrementByAmount(2))} className="btn3">red</button>
    <h1>{selectore}</h1> */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<UsersPage />} />
        <Route path="/contact" element={<AdminPage />} />
      </Routes> */}
      {/* <Asidebar /> */}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homeuser" element={<UsersPage />} />
          <Route path="/homeadmin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
