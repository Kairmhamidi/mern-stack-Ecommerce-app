import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigationbar from "./components/MobileNavigationbar";

function App() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <div className="flex justify-center items-baseline absolute bottom-0 right-6">
        <MobileNavigationbar />
      </div>
    </div>
  );
}

export default App;
