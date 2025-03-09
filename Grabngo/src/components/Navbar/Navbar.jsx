import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h2 className="text-lg font-bold text-orange-600">Grab 'N Go</h2>
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        aria-label="Login"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;