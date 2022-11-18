import { Link } from "react-router-dom";
import CardTwo from "./CardTwo";
import Locate from "./images/locate.svg";

const PlaceToStay = () => {
  return (
    <>
      <div className="placeto-nav">
        <div className="text">
        
            <p>Restaurant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>Fantastic City</p>
            <p>Beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
      
        </div>
        <button className="location-button">
          <span>Location</span>
          <img src={Locate} alt="Profile" />
        </button>
      </div>
      <div className="card-two" style={{ marginBottom: "90px" }}>
        <CardTwo />
      </div>
    </>
  );
};

export default PlaceToStay;
