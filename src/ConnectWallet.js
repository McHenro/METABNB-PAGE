import MyModal from "./MyModal";
import { useState } from "react";


function ConnectWallet() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
        <button id="wallet-text" onClick={() => setModalShow(true)}>
          Connect wallet
        </button>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ConnectWallet;
