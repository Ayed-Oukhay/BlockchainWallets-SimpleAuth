import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
// import CardBody from 'react-bootstrap/CardBody';
// import CardTitle from 'react-bootstrap/CardTitle';
// import CardHeader from 'react-bootstrap/CardHeader';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import CardFooter from 'react-bootstrap/CardFooter';

const Home = (props) => {

  return (
    <div>
      <div className="Wrapper">
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
          <center>
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
          </center>
        </div>
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../../assets/blob.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/path2.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../../assets/triunghiuri.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../../assets/waves.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../../assets/patrat.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../../assets/cercuri.png").default} style={{ width: 50, height: 50 }}
          />

          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Why we keep your coin <br />
                  <span className="text-white">secured</span>
                </h1>
                <p className="text-white mb-3">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel...
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    From 9.99%/mo
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("../../assets/etherum.png").default} style={{ width: 200, height: 200 }}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../../assets/path4.png").default} style={{ width: 50, height: 50 }}
            />

          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../../assets/path4.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/path5.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="path3"
            src={require("../../assets/path2.png").default} style={{ width: 50, height: 50 }}
          />

        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("../../assets/path5.png").default} style={{ width: 50, height: 50 }}
          />

        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../../assets/path4.png").default} style={{ width: 50, height: 50 }}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/path2.png").default} style={{ width: 50, height: 50 }}
          />
          <Col md="12">

          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("../../assets/path3.png").default} style={{ width: 50, height: 50 }}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the coin{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">

              </Col>
              <Col md="4">

              </Col>
              <Col md="4">

              </Col>
            </Row>
          </Container>
        </section>
      </div>


    </div>
  );

};

export default Home;