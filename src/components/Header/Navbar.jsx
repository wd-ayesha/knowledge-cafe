import React from "react";

const Navbar = () => {
  return (
    <div className="mx-24">
      <div className="navbar border-b-2">
        <div className="flex-1">
          <a className="normal-case text-2xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="public/images/nav.png" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
