import React from 'react';
import { Container ,Row,Col} from 'reactstrap';
import './PriceTraker.css'

const Logoss = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md-12 className="text-center mt-5 text-white ">
                        <img src="./logo192.png" alt="ssss" />  <span className='display-1'>CoinGecko</span>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Logoss;