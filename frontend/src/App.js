import './App.css';
import MetamaskLogin from './components/login/MetamaskLogin';
import Home from './components/home/Home';
import Navigationbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
//import TronWeb from 'tronweb';
import Web3 from 'web3'; // This library will help us interact and send/get requests from metamask using injected web3 methods
import * as fcl from "@onflow/fcl"; // used to call and configure the flow wallet (Blocto)
//import TronGrid from 'trongrid'; // used to interact with the TronGrid

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
  const [flowAddress, setFlowAddress] = useState(null); // We'll use this to get the connected Blocto (Flow) account
  const [currentFlowBalance, setCurrentFlowBalance] = useState(0); // We'll use this to get the Blocto account balance of the connected user

  // ------------------ Flow (Blocto) Wallet configuration ------------------
  //const [user, setUser] = useState(null);
  fcl.config()
    .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet
    .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn") // use Blocto testnet wallet
  // ------------------------------------------------------------------------

  // ********************************************* Metamask Connection *********************************************
  const onLogin = async (provider) => {
    // Initalizing web3
    const web3 = new Web3(provider);

    // ------------------- Getting our Metamask account -------------------
    const accounts = await web3.eth.getAccounts();
    // ------------------- checking if we're actually connected to Metamask -------------------
    if (accounts.length === 0) {
      console.log("Please make sure you're connected to Metamask!");
    } else if (accounts[0] !== currentAccount) {
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
    if (solanaAccount) {
      if (solanaAccount.publicKey !== solWalletKey) {
        setSolWalletKey(solanaAccount.publicKey.toString());
        setIsConnected(true);

        // ------------------- Getting the Phantom current balance -------------------
        const balance = await connection.getBalance(solanaAccount.publicKey);
        setCurrentSolBalance(Number(balance) / 1000000000);
      }
    }
  };
  // ***************************************************************************************************************

  // ********************************************* TronLink Connection *********************************************
  const connectTronWallet = async (provider) => {
    const account = await window.tronWeb.defaultAddress.base58;
    console.log(account);
    if (account) {
      setTronAddress(account);
      setIsConnected(true);
      // ------------------- Getting the Tron current balance -------------------
      const balance = await window.tronWeb.trx.getBalance(account);
      setCurrentTRXBalance(Number(balance) / 1000000);
      console.log(balance / 100000);
    } else {
      console.log("Please make sure you're connected to TronLink!");
      //Ou window.alert("Please make sure you're connected to TronLink!");
      // configure tronlink
      //window.tronWeb.setAddress(window.tronWeb.defaultAddress.hex);

    }
  }
  // ***************************************************************************************************************

  // ********************************************* Blocto Connection *********************************************
  const connectBloctoWallet = async () => {
    // ------ Getting the current connected user ---------------
    const user = await fcl.currentUser().snapshot();
    await fcl.currentUser().subscribe(user => { console.log("The Current User", user) });
    // ------ Getting the current user address ------
    setFlowAddress(user.addr);
    console.log(user.addr);
    // redirect the user to the home page
    //...

    // ------------------- Getting the Blocto current balance -------------------
    const balance = await fcl.currentUser().snapshot().balance;
    console.log(balance);
    setCurrentFlowBalance(Number(balance) / 1000000000);
    console.log(balance / 1000000000);
    // setIsConnected(true);
    // const balance = await fcl.currentUser().getBalance(user.addr);
    // console.log(balance);
    // setCurrentFlowBalance(Number(balance));
    // setIsConnected(true);
  }
  useEffect(() => {
    flowAddress !== null && setIsConnected(true);
  }, [flowAddress, setIsConnected, currentFlowBalance]);

  // ***************************************************************************************************************

  return (
    <div className="App">
      <Navigationbar />
      <header className="App-header">
        <h1>Testing authentication with different Wallets:</h1>
        <main>
          {/* If the user is not connected this will show the metamask button */}
          {isConnected ? <Home currentAccount={currentAccount} currentBalance={currentBalance} solWalletKey={solWalletKey} currentSolBalance={currentSolBalance} tronAddress={tronAddress} currentTRXBalance={currentTRXBalance} flowAddress={flowAddress} currentFlowBalance={currentFlowBalance} /> : <MetamaskLogin onLogin={onLogin} onLogout={onLogout} connectPhantomWallet={connectPhantomWallet} connectTronWallet={connectTronWallet} connectBloctoWallet={connectBloctoWallet} />}
          {/* If the user is connected this will show the homepage */}
        </main>
      </header>
    </div>
  );
}

export default App;