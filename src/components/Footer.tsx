// import { ReactSVG } from 'react-svg';
// import logo from "../assets/layer-health-logo.svg"
import aicpalogo from "../assets/aicpa.avif"
import hippalogo from "../assets/hipaa.avif"


const Footer = () => {
  return(
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
        {/* <ReactSVG className="object-top-left p-5" src={logo}/> */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          <img className="rounded-lg w-30 h-20 shadow-lg" src={hippalogo}/>
          <img className="rounded-lg w-30 h-20 shadow-lg" src={aicpalogo}/>
        </div>
      </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Layer Health 2025</a>
        </nav>
    </footer>
  )
}


export default Footer