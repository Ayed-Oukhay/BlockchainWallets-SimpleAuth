import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = (props) => {

  return (
    <div>
      <div className="Slider">

      </div>

      <div className="Account-infos">
        <hr />
        <h2>Metamask Account address:</h2>
        <p> {props.currentAccount} </p>
        <h2>Account balance:</h2>
        <p> {props.currentBalance} </p>
        <br />
        <h2>Phantom Account address:</h2>
        <p> {props.solWalletKey} </p>
        <h2>Account balance:</h2>
        <p> {props.currentSolBalance} </p>
        <br />
        <h2>TronLink Account address:</h2>
        <p> {props.tronAddress} </p>
        <h2>Account balance:</h2>
        <p> {props.currentTRXBalance} </p>
        <br />
        <h2>Blocto Account address:</h2>
        <p> {props.flowAddress} </p>
        <h2>Account balance:</h2>
        <p> {props.currentFlowBalance} </p>
      </div>

      <div className="Collections">
        <table>
          <tr>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
          </tr>
        </table>

      </div>

    </div>
  );

};

export default Home;