import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto p-5 max-h-[40vh] min-h-[40vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-semibold   ">Explore. Learn. Innovate.</h1>
        <p className="mt-2">
          Daily insights on AI, coding, and the future of technology — powered
          by smart writing and fresh updates.
        </p>

        <form
          action="

"
        >
          <div className="mt-4 flex items-center border rounded-md">
            <input
              className="w-full px-2 py-3 border-[#150A24]  outline-none"
              placeholder="Type to explore trending tech topics..."
              type="text"
            />
            <button className="bg-[#150A24] px-5  rounded-r-md  cursor-pointer flex items-center gap-2 py-3 text-white">
              <span>Search</span>

              <IoSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
