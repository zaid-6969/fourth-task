// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import UsersPage from "./pages/UsersPage";
// import AdminPage from "./pages/AdminPage";
// import "./styles/app.scss";
// import { useDispatch, useSelector } from "react-redux";
// // import { decrement, increment, incrementByAmount } from "./store/counterSlice";
// import MainLayout from "./layout/MainLayout";
// import Spaces from "./pages/Spaces";

// const App = () => {
//   // const selectore = useSelector((state) => state.counter.value);
//   // const dispatch = useDispatch();
//   return (
//     <>
//       {/* <h1>Home</h1>
//     <button onClick={() => dispatch(increment())} className="btn1">green</button>
//     <button onClick={() => dispatch(decrement())} className="btn2">blue</button>
//     <button onClick={() => dispatch(incrementByAmount(2))} className="btn3">red</button>
//     <h1>{selectore}</h1> */}
//       {/* <Navbar /> */}
//       {/* <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/about" element={<UsersPage />} />
//         <Route path="/contact" element={<AdminPage />} />
//       </Routes> */}
//       {/* <Asidebar /> */}

//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/homeuser" element={<UsersPage />} />
//           <Route path="/homeadmin" element={<AdminPage />} />
//           <Route path="/spaces" element={<Spaces />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import AdminPage from "./pages/AdminPage";
import "./styles/app.scss";
import MainLayout from "./layout/MainLayout";
import Spaces from "./pages/Spaces";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Star from "./pages/star";

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register /> } />
        <Route element={<MainLayout />}>
          {/* PUBLIC ROUTES */}

          {/* PROTECTED ROUTES */}
          <Route
            path="/homeuser"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/homeadmin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/spaces"
            element={
              <ProtectedRoute>
                <Spaces />
              </ProtectedRoute>
            }
          />
          <Route 
          path="/*"
            element={
              <ProtectedRoute>
                <Star />
              </ProtectedRoute>
            }
         />
        </Route>
      </Routes>
    </>
  );
};

export default App;
