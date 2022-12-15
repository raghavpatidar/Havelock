import { Col, Row , Card  } from 'antd';
const Care = () => {
     
        return ( 
                <div >
                      <Row className='care' style={{padding:""}} gutter={[0,16]}>
                      <Col style={{maxWidth:"200px"}} xs={{ span: 12, offset: 0 }} lg={{ span: 6, offset:0  }}>
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9" ,  }} bordered = {false}  >
                                    <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/conversation.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                                    <h3>Customer Happiness</h3>
                                     <p>We’re delighted to help you. Anything you need, we’re available</p>
                            </Card>
                     </Col>
                     <Col style={{maxWidth:"200px"}} xs={{ span: 12, offset: 0}} lg={{ span: 6, offset:0 }}>
                         
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9"  }} bordered = {false}  >
                                  <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/payment.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>Secure Payments</h3>
                        <p>We take your security seriously. Use our  data-protected, user-friendly  payment  gateway to process  payments safely.</p>
                            </Card>
                            
                     </Col>
                     <Col style={{maxWidth:"200px"}} xs={{ span: 12, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                            
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9" }} bordered = {false} >
                                   <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/Page-1.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>No Hidden Costs</h3>
                        <p>What you see is what you get.</p>
                            </Card>
                          
                     </Col>
                     <Col style={{maxWidth:"200px"}} xs={{ span: 12, offset: 0}} lg={{ span: 6, offset: 0 }}>
                          
                            <Card className='carecard' style={{backgroundColor : "#f9f9f9"  }} bordered = {false} >
                                         <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/reliability.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>Fast Confirmations</h3>
                        <p>Be confident that your trip is set. Get ready for the experience.</p>
                            </Card>
                            
                     </Col>
                </Row>
                </div>
        );
    
}

export default Care ;

// height:"325px" , minWidth:150 , textAlign:"center"