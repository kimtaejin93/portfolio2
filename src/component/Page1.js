import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'

const Page1 = () => {
  return (
    <Container>
        <div>
            <Row className='row-style'>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <div className='name'>
                        Taejin Kim
                    </div>
                    <div className='job'>
                        개발자
                    </div>
                </Col>
                <Col md={4} className='subject'>
                    <div>
                        PORTFOLIO
                    </div>
                    
                </Col>
                <Row className='name-job-deco'>
                </Row>
            </Row>
        </div>
        <div>
        
            <div className='line-deco'>     
            </div>
            <div className='line-deco2'>
                introduce
            </div>
            <Row className='introduce'>
            <Col md={3}>
                <div className='tb-1'>IT'S ME</div>
            </Col>
            <Col md={9}>
                <div className='tb-1-1'>Kongju university graduated</div>
                <Row>
                    <Col md={4}>
                        <div className='tb-1-2'>
                        <h6>제목</h6>
                            <p>내용</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='tb-1-2'>
                        <h6>제목</h6>
                            <p>내용</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='tb-1-2'>
                            <h6>제목</h6>
                            <p>내용</p>
                        </div>
                    </Col>
                </Row>

                
            </Col>
        </Row>
        <Row>
            <Col md={3}>강조할거</Col>
            <Col md={9}>
                <Row>
                    <Col md={4}>2</Col>
                    <Col md={4}>3</Col>
                    <Col md={4}>4</Col>
                </Row>
                <Row>
                    <Col md={4}>2</Col>
                    <Col md={4}>3</Col>
                    <Col md={4}>4</Col>
                </Row>
            </Col>
        </Row>
        
        </div>
    </Container>
  )
}

export default Page1