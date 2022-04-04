import logo from '../../assets/metamask_logo.png';
import logo2 from '../../assets/phantom_logo.png';
import logo3 from '../../assets/tronlink_logo.png';
import logo4 from '../../assets/Blocto_logo.png';
import logo5 from '../../assets/waxWallet_logo.png';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Web3 from 'web3';
//import TronWeb from 'tronweb';
import * as fcl from "@onflow/fcl";

const Metamask = (props) => {

    const [isConnecting, setIsConnecting] = useState(false); //used to check if the user is connecting or not to display different messages

    // ------------------ Flow (Blocto) Wallet configuration ------------------
    fcl.config()
      .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet
      .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn") // use Blocto testnet wallet 
    // ------------------------------------------------------------------------

    // ---------------- For compatibility reasons, we need to check the version of the provider (Metamask) because some browsers still use window.web3 instead of window.ethereum --------------------------
    const detectProvider = () =>{
      let provider;
      // ----- Checking Polygon (Ethereum) provider -----
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.solana && window.solana.isPhantom){ // ----- Checking Solana provider-----
        provider = window.solana;
      } else if (window.tronWeb) {
        provider = window.tronWeb;
      } else if (window.web3){ // ----- Checking Web3 general provider-----
        provider = window.web3.currentProvider;
      } else { // ----- If no provider is found -----
        window.alert("No wallet browser-extension detected! check out your browser extensions!");
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
        // ----------- Adding the user to database -----------
        const account = await window.solana.connect();
        const AccountAdd = account.publicKey.toString();
        const userObject = {
          publicAddress: AccountAdd
        };
        axios.post('http://localhost:7000/user', userObject).then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
        // ----------------------------------------------------
        props.connectPhantomWallet(provider);
      }
    };
    // **********************************************************************************************************

    // ********************************* TronLink Authentication Logic *********************************
    const TronConnect = async() => {
      const provider = detectProvider();

      if (provider){
        setIsConnecting(true);
        // window.tronWeb.request({
        //   method: 'tron_requestAccounts'
        // });
        // ----------- Adding the user to database -----------
        
        // ---------------------------------------------------
        props.connectTronWallet(provider);
      }
    };
    // *************************************************************************************************

    // ********************************* Blocto Authentication Logic *********************************
    const BloctoConnect = async() => {
      fcl.authenticate(); // authenticating the user through Blocto
      setIsConnecting(true); 
      // fcl.unauthenticate();
      // ----------- Adding the user to database -----------
        
      // ---------------------------------------------------
      props.connectBloctoWallet();
    };
    // *************************************************************************************************

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
          <button className="btn btn-success btn-block" onClick={TronConnect}>
          <img src={logo3} alt="TronLinkImg" className="TronLink-logo" type="button" style={{height:30,width:30}}/> 
          {/* <span>{AuthBtnClick ? 'Login with Metamask':'Please make sure that Metamask is installed first!'}</span> */}
          {!isConnecting && "Connect"}
          {isConnecting && "Loading..."}
          </button>
          <br/>

        {/* ------------ Blocto Login Button --------------- */}
          <button className="btn btn-danger btn-block" onClick={BloctoConnect}>
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