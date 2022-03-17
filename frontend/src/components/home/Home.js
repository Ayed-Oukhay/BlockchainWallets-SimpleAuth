const Home = (props) => {
    
    return (
      <div className="HomePage">
          <h2>Account address:</h2>
          <p> {props.currentAccount} </p>
      </div>
    );

};
  
export default Home;