import './App.css';
import MetamaskLogin from './components/login/MetamaskLogin';
import Home from './components/home/Home';
import {useState} from 'react';
import TronWeb from 'tronweb';
import Web3 from 'web3'; // This library will help us interact and send/get requests from metamask using injected web3 methods

const solanaWeb3 = require('@solana/web3.js');

//import axios from 'axios';

function App() {

  // ------------------ This section will help us check if the user is connected or not in order to redirect him to the homepage ------------------
  const [isConnected, setIsConnected] = useState(false); // we'll use this to check if the user is connected or not
  const [currentAccount, setCurrentAccount] = useState(null); // We'll use this to get the Metamask connected account
  const [currentBalance, setCurrentBalance] = useState(0); // We'll use this to get the account balance of the connected user
  const [solWalletKey, setSolWalletKey] = useState(null); // We'll use this to get the connected Phantom account
  const [currentSolBalance, setCurrentSolBalance] = useState(0); // We'll use this to get the Phantom account balance of the connected user
  const [tronAddress, setTronAddress] = useState(null); // We'll use this to get the connected TronLink account
  const [currentTRXBalance, setCurrentTRXBalance] = useState(0); // We'll use this to get the TronLink account balance of the connected user


  // ********************************************* Metamask Connection *********************************************
  const onLogin = async (provider) =>{
    // Initalizing web3
    const web3 = new Web3(provider);

    // ------------------- Getting our Metamask account -------------------
    const accounts = await web3.eth.getAccounts();
    // ------------------- checking if we're actually connected to Metamask -------------------
    if (accounts.length === 0 ){
      console.log("Please make sure you're connected to Metamask!");
    } else if (accounts[0] !== currentAccount){
      setCurrentAccount(accounts[0]);

      // ------------------- Getting the current balance -------------------
      const accBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );
      setCurrentBalance(Number(accBalance).toFixed(6));
      setIsConnected(true);
    }
  }
  // ***************************************************************************************************************

  // ----- Logout function not yet fully used -------------
  const onLogout = () => {
    setIsConnected(false);
  }
  // ------------------------------------------------------

  // ********************************************* Phantom Connection *********************************************
  const connectPhantomWallet = async (provider) => {

    // --------- Connecting to the Solana Cluster to get the Phantom account balance ---------------
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

    // -------------- Getting the Phantom account address -------------------
    const solanaAccount = await window.solana.connect();
    if (solanaAccount){
      if (solanaAccount.publicKey !== solWalletKey){
        setSolWalletKey(solanaAccount.publicKey.toString());
        setIsConnected(true);

        // ------------------- Getting the Phantom current balance -------------------
        const balance = await connection.getBalance(solanaAccount.publicKey);
        setCurrentSolBalance(Number(balance)/1000000000);
      }
    }
  };
  // ***************************************************************************************************************

  // ********************************************* TronLink Connection *********************************************
  const connectTronWallet = async (provider) => {

    // this.setState({loading:true})
    // await new Promise(resolve => {
    //     const tronWebState = {
    //         installed: !!window.tronWeb,
    //         loggedIn: window.tronWeb && window.tronWeb.ready
    //     };
    //     if(tronWebState.installed) {
    //         this.setState({
    //             tronWeb:
    //             tronWebState
    //         });
    //         return resolve();
    //     }
    // });
    
    // const mainOptions = {
    //   fullNode: 'https://api.nileex.io',
    //   solidityNode: 'https://api.nileex.io',
    //   eventServer: 'https://api.nileex.io'
    // };
    
    // const privateKey = '';
    
    // const connection = new TronWeb(mainOptions.fullNode, mainOptions.solidityNode, mainOptions.eventServer, privateKey);
    
    if (provider.isConnected()){
      if (window.tronWeb.defaultAddress !== tronAddress){
        const account = await window.tronWeb.defaultAddress.base58;
        console.log(account);
        setTronAddress(account);
        setIsConnected(true);
        // ------------------- Getting the Phantom current balance -------------------
        const balance = await window.tronWeb.trx.getBalance(account);
        setCurrentTRXBalance(Number(balance)/1000000);
        console.log(balance/100000);
      }
    }
  }
  // ***************************************************************************************************************


  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing authentication with different Wallets:</h1>
        <main>
          {/* If the user is not connected this will show the metamask button */}
          {!isConnected && <MetamaskLogin onLogin={onLogin} onLogout={onLogout} connectPhantomWallet={connectPhantomWallet} connectTronWallet={connectTronWallet} /> } 
          {/* If the user is connected this will show the homepage */}
          {isConnected && <Home currentAccount={currentAccount} currentBalance={currentBalance} solWalletKey={solWalletKey} currentSolBalance={currentSolBalance} tronAddress={tronAddress} currentTRXBalance={currentTRXBalance} /> } 
        </main>
      </header>
    </div>
  );
}

export default App;
