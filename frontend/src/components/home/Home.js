const Home = (props) => {
    
    return (
      <div className="HomePage">
          <h2>Account address:</h2>
          <p> {props.currentAccount} </p>
          <h2>Account balance:</h2>
          <p> {props.currentBalance} </p>
      </div>
    );

};
  
export default Home;