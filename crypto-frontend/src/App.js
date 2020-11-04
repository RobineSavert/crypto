import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import CryptoTable from './components/CryptoTable';
import CryptoChart from './components/CryptoChart';
import BuyForm from './BuyForm';

class App extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-2 mb-5">
                    <Header />
                </Row>
                <Row className="mt-1 mb-3">
                    <Col md={7}>
                        <CryptoTable />
                    </Col>
                    <Col>
                        <CryptoChart />
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="text-center">
                        <hr/>
                        <Row>
                            <Col md={6}>
                                <BuyForm />
                            </Col>
                            <Col md={6}>
                                <Button variant="secondary" size="lg">
                                    Sell
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App