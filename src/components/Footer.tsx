// import { ReactSVG } from 'react-svg';
// import logo from "../assets/layer-health-logo.svg"
import aicpalogo from "../assets/aicpa.avif"
import hippalogo from "../assets/hipaa.avif"


const Footer = () => {
  return(
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 shadow-lg">
        {/* <ReactSVG className="object-top-left p-5" src={logo}/> */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          <img className="rounded-lg w-30 h-20 shadow-md" src={hippalogo}/>
          <img className="rounded-lg w-30 h-20 shadow-md" src={aicpalogo}/>
        </div>
      </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="https://www.layerhealth.com/privacy">Privacy policy</a>
          <a className="link link-hover" href="https://www.layerhealth.com/terms">Terms of Use</a>
          <p>Layer Health 2025</p>
        </nav>
    </footer>
  )
}


export default Footer