
import Modal from "react-bootstrap/Modal";
import Icon1 from "./images/modal-meta.svg";
import Anchor from "./images/modal-anchor.svg";

import Icon2 from "./images/modal-wallet.svg";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{ width: "600px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            borderRradius: "",
            color: "#333333",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "30px",
            width: "182px",
          }}
        >
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="choose-prefer">
          <p>Choose your prefferred wallet:</p>
        </div>
        <div className="modal-card">
          <button className="modcard-content">
            <div className="icon-text">
              <img src={Icon1} alt="Profile" />
              <p>Metamask</p>
            </div>
            <div className="right-anchor">
              <img src={Anchor} alt="Profile" />
            </div>
          </button>
          <button className="modcard-content">
            <div className="icon-text">
              <img src={Icon2} alt="Profile" />
              <p>WalletConnect</p>
            </div>
            <div className="right-anchor">
              <img src={Anchor} alt="Profile" />
            </div>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
