import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';


const Nav = () => {
  return(
    <div className="navbar bg-base-100 shadow-lg bg-yellow-100">
    <div className="flex-1">
      <ReactSVG src="../assets/layer-health-logo.svg" />
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a href="https://www.layerhealth.com/company">Contact</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
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

export default Nav;