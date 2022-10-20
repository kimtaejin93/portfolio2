import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'

const Page1 = () => {
  return (
    <Container>
        <div>
            <Row className='row-style'>
                <Col md={8}>
                    <div className='name'>
                        Taejin Kim
                    </div>
                    <div className='job'>
                        개발자
                    </div>
                </Col>
                <Col md={4}>
                    <div className='subject'>
                        PORTFOLIO
                    </div>
                    
                </Col>
                <Row className='name-job-deco'>
                </Row>
            </Row>
        </div>
        <div>
        <Row>
                <Col md={8}>
                    <div className='box'>
                        Taejin Kim
                    </div>
                    <div className='box'>
                        프론트엔드 개발자s
                    </div>
                </Col>
                <Col md={4}>
                    <div className='box'>
                        KTJ PPT
                    </div>
                    
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Page1