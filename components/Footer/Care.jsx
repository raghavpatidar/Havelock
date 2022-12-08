import { Col, Row , Card  } from 'antd';
const Care = () => {
     
        return ( 
                <>
                      <Row style={{padding:"0"}} gutter={[0,0]}>
                      <Col xs={{ span: 9, offset: 0 }} lg={{ span: 4, offset: 3 }}>
                            <Card style={{backgroundColor : "#f9f9f9" , height:"325px" , minWidth:150 }} bordered = {false}  >
                                    <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/conversation.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                                    <h3>Customer Happiness</h3>
                                     <p>We’re delighted to help you. Anything you need, we’re available.</p>
                            </Card>
                     </Col>
                     <Col xs={{ span: 9, offset: 2}} lg={{ span: 4, offset:1 }}>
                         
                            <Card style={{backgroundColor : "#f9f9f9" ,height:"325px" ,  minWidth:190 }} bordered = {false}  >
                                  <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/payment.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>Secure Payments</h3>
                        <p>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</p>
                            </Card>
                            
                     </Col>
                     <Col xs={{ span: 9, offset: 0 }} lg={{ span: 4, offset: 1 }}>
                            
                            <Card style={{backgroundColor : "#f9f9f9" ,height:"325px" ,  minWidth:190 }} bordered = {false} >
                                   <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/Page-1.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>No Hidden Costs</h3>
                        <p>What you see is what you get.</p>
                            </Card>
                          
                     </Col>
                     <Col xs={{ span: 9, offset: 2}} lg={{ span: 4, offset: 1 }}>
                          
                            <Card style={{backgroundColor : "#f9f9f9",height:"325px" ,  minWidth:190  }} bordered = {false} >
                                         <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/reliability.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                        <h3>Fast Confirmations</h3>
                        <p>Be confident that your trip is set. Get ready for the experience.</p>
                            </Card>
                            
                     </Col>
                </Row>
                </>
        );
    
}

export default Care ;
