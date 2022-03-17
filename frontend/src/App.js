import './App.css';
import MetamaskLogin from './components/login/MetamaskLogin';
import Home from './components/home/Home';
import {useState} from 'react';
import Web3 from 'web3'; // This library will help us interact and send/get requests from metamask using injected web3 methods

function App() {

  // ------------------ This section will help us check if the user is connected or not in order to redirect him to the homepage ------------------
  const [isConnected, setIsConnected] = useState(false); // we'll use this to check if the user is connected or not
  const [currentAccount, setCurrentAccount] = useState(null); // We'll use this to get the connected account

  const onLogin = async (provider) =>{
    // initalizing web3
    const web3 = new Web3(provider);
    // getting our Metamask account
    const accounts = await web3.eth.getAccounts()
    // checking if we're actually connected to Metamask
    if (accounts.length === 0 ){
      console.log("Please make sure you're connected to Metamask!");
    } else if (accounts[0] !== currentAccount){
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  }

  const onLogout = () =>{
    setIsConnected(false);
  }

  //Testing if the login passed successfully
  console.log('isconnected ', isConnected)
  // ---------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing authentication with Metamask:</h1>
        <main>
          {/* If the user is not connected this will show the metamask button */}
          {!isConnected && <MetamaskLogin onLogin={onLogin} onLogout={onLogout} /> } 
          {/* If the user is connected this will show the homepage */}
          {isConnected && <Home currentAccount={currentAccount} /> }
        </main>
      </header>
    </div>
  );
}

export default App;
