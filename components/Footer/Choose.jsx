import { Col, Row , Card  } from 'antd';
const Choose = () => {
     
        return ( 
                <>
                  {/* <Row style={{ alignItems:"center"}} className="care"> */}
                      <Row className='care' style={{padding:""}} gutter={[0,16]}>
                      <Col style={{maxWidth:"200px"}} xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset:0  }}>
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9" ,  }} bordered = {false}  >
                                    <img className='chooseimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/handshake.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                                    <h3>Local Expertise</h3>
                                     <p >We’re delighted to help you. Anything you need, we’re available.</p>
                            </Card>
                     </Col>
                      <Col style={{maxWidth:"200px"}} xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset:0  }}>
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9" ,  }} bordered = {false}  >
                                    <img className='chooseimg'  src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/hotel-1.svg?compress=true&quality=90&w=300&dpr=1.3"></img>
                                    <h3>The Choicest Experience</h3>
                                    <p>We take your security seriously. Use our data-protected, <br></br>
                                       user-friendly payment gateway to  <br></br> process payments safely.</p>
                            </Card>
                     </Col>
                      <Col style={{maxWidth:"200px"}} xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset:0  }}>
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9" ,  }} bordered = {false}  >
                                   <img className='chooseimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/sunset.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                                   <h3>Tailor-make You own Holiday</h3>
                                    <p>What you see is what you get.</p>
                            </Card>
                     </Col>
                   </Row>

                </>
        );
    
}

export default Choose ;
