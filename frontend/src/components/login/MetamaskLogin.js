import logo from '../../assets/metamask_logo.png'
import Btn from "react-bootstrap/Button";
import { useState } from 'react';

const Metamask = (props) => {

    const [isConnecting, setIsConnecting] = useState(false); //used to check if the user is connecting or not to display different messages
  
    // ---------------- For compatibility reasons, we need to check the version of the provider (Metamask) because some browsers still use window.web3 instead of window.ethereum --------------------------
    const detectProvider = () =>{
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3){
        provider = window.web3.currentProvider;
      } else {
        window.alert("No Ethereum browser detected! check out Metamask!");
      }
      return provider;
    }
    // ---------------------------------------------------------------------------------------------------------------

    // ------------ Once clicked, this function will change the status of the user to Connected! --------------------
    const AuthBtnClick = async () => {
      const provider = detectProvider();
      if (provider) {

        // Cheking if Metamask is installed and detected 
        if (provider !== window.ethereum ) {
          console.error("Not window.ethereum provider. Do you have multiple wallet installed ?");
        }

        setIsConnecting(true);
        await provider.request({
          method: "eth_requestAccounts",
        });
        setIsConnecting(false);
        props.onLogin(provider);
      }
    };
    // ---------------------------------------------------------------------------------------------------------------

    return (
      <div className="MetaAuth">
          <Btn variant="primary" onClick={AuthBtnClick}>
          <img src={logo} alt="MetamaskImg" className="metamask-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </Btn>
      </div>
    );
}
  
export default Metamask;