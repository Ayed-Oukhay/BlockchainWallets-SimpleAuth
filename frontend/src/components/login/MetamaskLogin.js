import logo from '../../assets/metamask_logo.png';
import logo2 from '../../assets/phantom_logo.png';
import logo3 from '../../assets/tronlink_logo.png';
import logo4 from '../../assets/Blocto_logo.png';
import logo5 from '../../assets/waxWallet_logo.png';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Web3 from 'web3';

const Metamask = (props) => {

    const [isConnecting, setIsConnecting] = useState(false); //used to check if the user is connecting or not to display different messages

  
    // ---------------- For compatibility reasons, we need to check the version of the provider (Metamask) because some browsers still use window.web3 instead of window.ethereum --------------------------
    const detectProvider = () =>{
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.solana && window.solana.isPhantom){
        provider = window.solana;
      } else if (window.web3){
        provider = window.web3.currentProvider;
      } else {
        window.alert("No Ethereum browser detected! check out Metamask!");
      }
      return provider;
    }
    // ---------------------------------------------------------------------------------------------------------------

    // ********************************* Metamask Connection *********************************
    // ------------ Once clicked, this function will change the status of the user to Connected! --------------------
    const AuthBtnClick = async () => {
      const provider = detectProvider();
      if (provider) {

        // ------------------- Cheking if Metamask is installed and detected ------------------- 
        if (provider !== window.ethereum ) {
          console.error("Not window.ethereum provider. Do you have multiple wallet installed ?");
        }

        setIsConnecting(true);
        await provider.request({
          method: "eth_requestAccounts",
        });
        
        // ------------------- Creating the user and adding it to the database -------------------
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts()
        const userObject = {
          publicAddress: accounts[0]
        };
        axios.post('http://localhost:7000/user', userObject).then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
        
        setIsConnecting(false);
        props.onLogin(provider);
      }
    };
    // **********************************************************************************************************

    // ********************************* Phantom Authentication Logic ********************************* 
    const phantomConnect = async() => {
      
      const provider = detectProvider();
      if (provider){
        setIsConnecting(true);
        
        // const solkey = await window.solana.connect();
        // const account = solkey.publicKey.toString();
        // console.log(account);
        // console.log(window.solana.isConnected);

        props.connectPhantomWallet(provider);
      }
    };
    // **********************************************************************************************************

    return (
      <div className="MetaAuth">

        {/* ------------ Metamask Login Button -------------- */}
          <button className="btn btn-primary btn-block" onClick={AuthBtnClick}>
          <img src={logo} alt="MetamaskImg" className="metamask-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>
          <br/>

        {/* ------------ Phantom Login Button --------------- */}
          <button className="btn btn-warning btn-block" onClick={phantomConnect}>
          <img src={logo2} alt="PhantomImg" className="phantom-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>
          <br/>

        {/* ------------ TronLink Login Button --------------- */}
          <button className="btn btn-success btn-block">
          <img src={logo3} alt="TronLinkImg" className="TronLink-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>
          <br/>

        {/* ------------ Blocto Login Button --------------- */}
          <button className="btn btn-danger btn-block">
          <img src={logo4} alt="BloctoImg" className="Blocto-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>
          <br/>

        {/* ------------ WAX Cloud Wallet Login Button --------------- */}
          <button className="btn btn-info btn-block">
          <img src={logo5} alt="WAXImg" className="WAX-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>

      </div>
    );
}
  
export default Metamask;