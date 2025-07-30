import { useState } from 'react';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return(
    <div className="w-64 h-screen bg-gray-500 text-white p-4">
      <div className="flex flex-col">
        <div className="text-xl font-semibold mb-4">Filters</div>
          <div className="mt-4 mb-8">
            <input type="text" placeholder="Search" className="input input-bordered shadow" />
          </div>
        <div className="dropdown dropdown-bottom">
          <button className="btn btn-primary w-full" onClick={toggleDropdown}>
            Notes Filters
          </button>
          <ul className={`dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <li><a>id</a></li>
            <li><a>provider</a></li>
            <li><a>hospital</a></li>
            <li><a>date</a></li>
          </ul>
          <div className="mt-4">
            <input type="text" placeholder="Search" className="input input-bordered shadow" />
          </div>
        </div>
        <div className="dropdown dropdown-bottom mt-4">
          <button className="btn btn-primary w-full" onClick={toggleDropdown}>
            Patient Filters
          </button>
          <ul className={`dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <li><a>id</a></li>
            <li><a>name</a></li>
            <li><a>gender</a></li>
            <li><a>date of birth</a></li>
          </ul>
            <div className="mt-4">
              <input type="text" placeholder="Search" className="input input-bordered shadow" />
            </div>
        </div>
      </div>
    </div>
  )
}


export default Sidebar