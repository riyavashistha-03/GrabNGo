import React from "react";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import Plate from "./components/Plate/Plate.jsx";


const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex flex-1 flex-col md:flex-row">
        {/* Left Section */}
        <section className="md:w-1/2 flex flex-col justify-center items-center bg-orange-500 text-white p-6 text-center">
          <h1 className="text-5xl font-bold">Grab 'N Go</h1>
          <p className="mt-4 text-xl italic">“Don’t stand in line, order online!”</p>
        </section>
        
        {/* Right Section */}
        <section className="md:w-1/2 flex flex-col justify-between bg-white p-6">
          <div className="flex-1 flex justify-center items-center">
            <Plate />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

