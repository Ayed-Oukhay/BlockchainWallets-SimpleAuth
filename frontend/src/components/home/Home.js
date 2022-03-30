const Home = (props) => {
    
    return (
      <div className="HomePage">
          <hr/>
          <h2>Metamask Account address:</h2>
          <p> {props.currentAccount} </p>
          <h2>Account balance:</h2>
          <p> {props.currentBalance} </p>
          <br/>
          <h2>Phantom Account address:</h2>
          <p> {props.walletKey} </p>
          <h2>Account balance:</h2>
          <p> {props.currentSolBalance} </p>
          <br/>
          <h2>TronLink Account address:</h2>
          <p> {props.tronAddress} </p>
          <h2>Account balance:</h2>
          <p> {props.currentTRXBalance} </p>
      </div>
    );

};
  
export default Home;