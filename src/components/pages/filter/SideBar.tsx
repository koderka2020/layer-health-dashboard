import { useState } from 'react';
import Table from './Table'

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <div className="flex flex-col">
          <div className="text-xl font-semibold mb-4">Filters</div>
          
          {/* Dropdown */}
          <div className="dropdown dropdown-bottom">
            <button className="btn btn-primary w-full" onClick={toggleDropdown}>
              Dropdown Filter
            </button>
            <ul className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li><a>Option 1</a></li>
              <li><a>Option 2</a></li>
              <li><a>Option 3</a></li>
            </ul>
          </div>

          {/* Another Dropdown Filter */}
          <div className="dropdown dropdown-bottom mt-4">
            <button className="btn btn-primary w-full" onClick={toggleDropdown}>
              Another Filter
            </button>
            <ul className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li><a>Filter 1</a></li>
              <li><a>Filter 2</a></li>
              <li><a>Filter 3</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <Table/>
      </div>
    </div>
  );
};

export default Sidebar;
