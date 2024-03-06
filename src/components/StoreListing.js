import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListing(){
    return(
        <div>
            <h2>Browse stores in Houston</h2>
            <Container>
                <Row>
                    <Row>
                        <Col>
                            <Images src ="" /> Picture here
                        </Col>
                        <Col>
                            <h5>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col></Col>
                    <Row>
                        <Col>
                            <Image src="" />
                        </Col>
                        <Col>
                            <h5> Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col></Col>
                    <Row>
                        <Col>
                            <Image src="" />
                        </Col>
                        <Col>
                            <h5>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Row>
                        <Col>
                            <Image src="" />
                        </Col>
                        <Col>
                            <h5>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col></Col>
                    <Row>
                        <Col>
                            <Image src="" />
                        </Col>
                        <Col>
                            <h5>Sprouts Farmer Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col></Col>
                    <Row>
                        <Col>
                            <Image src="" />
                        </Col>
                        <Col>
                            <h5>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}