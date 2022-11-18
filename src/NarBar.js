import { Link } from "react-router-dom";
import NavImage from "./images/Group.svg";
import { FaHamburger } from "react-icons/fa";
import ConnectWallet from "./ConnectWallet"
const NavBar = () => {
  return (
    // <div className="flex justify-between py-12 px-16">
    //   <div className="meta-image">
    //     <img src={NavImage} alt="Prof" />
    //   </div>
    //   <div className="nav-text">
    //     <Link to="/">
    //       <p>Home</p>
    //     </Link>
    //     <Link to="place-to-stay">
    //       <p>Place to stay</p>
    //     </Link>
    //     <p>NFTs</p>
    //     <p>Community</p>
    //   </div>
    //   <div className="connect-wallet">
    //     <ConnectWallet />
    //   </div>
    // </div>
    <nav className="">
      <div className="logo-container">
        <img src={NavImage} alt="Prof" />
      </div>
      <input type="checkbox" id="check"></input>
      <label for="check" class="hamburger-btn">
        <FaHamburger className="w-6 h-6" />
      </label>
      <ul class="nav-list">
        <li>
          <Link to="/" className="active">Home </Link>
        </li>
        <li>
          <Link to="/place-to-stay">Place to stay </Link>
        </li>
        <li>
          <Link to="#">NFTs</Link>
        </li>
        <li>
          <Link to="#">Community</Link>
        </li>
        <li>
          <div className="connect-wallet">
            <ConnectWallet />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
