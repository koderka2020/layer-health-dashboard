import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import logo from "../assets/layer-health-logo.svg"


const Navbar = () => {
  return(
    <div className="navbar bg-base-100 bg-orange-300 shadow-lg">
      <div className="flex-1">
        <ReactSVG className="p-2" src={logo}/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="https://www.layerhealth.com/company">Contact</a></li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link to="/">Main</Link></li>
                <li><Link to="/filter">Filter</Link></li>
                <li><Link to="/stats">Stats</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;