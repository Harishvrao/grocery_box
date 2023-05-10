import { useSelector } from "react-redux";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Customers from "./pages/Customers";

function App() {
  const mode = useSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [islogin, setIsLogin] = useState(true);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {!islogin ? (
            <Routes>
              <Route path="/" element={<Login isLogin={setIsLogin} />} />
            </Routes>
          ) : (
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
              </Route>
            </Routes>
          )}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
