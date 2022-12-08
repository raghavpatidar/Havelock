import { Col, Row , Card  } from 'antd';
const Choose = () => {
     
        return ( 
                <>
                  <Row style={{padding:"0 20px 0 20px" , alignItems:"center"}}>
                      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }} style={{textAlign:"center"}}>
                            <Card style={{backgroundColor : "#f9f9f9" , height:"325px" , minWidth:240 }} bordered = {false}  className='choosecard' >
                                    <img className='chooseimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/handshake.svg?compress=true&quality=90&w=240&dpr=1.3"></img>
                                    <h3>Local Expertise</h3>
                                     <p>We’re delighted to help you. Anything you need, we’re available.</p>
                            </Card>
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }} style={{textAlign:"center"}}>
                         
                            <Card style={{backgroundColor : "#f9f9f9" ,height:"325px" ,  minWidth:240 }} bordered = {false} className='choosecard'  >
                                  <img className='chooseimg'  src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/hotel-1.svg?compress=true&quality=90&w=300&dpr=1.3"></img>
                        <h3>The Choicest Experience</h3>
                        <p>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</p>
                            </Card>
                            
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset:0 }} style={{textAlign:"center"}}>
                            <Card style={{backgroundColor : "#f9f9f9" ,height:"325px" ,  minWidth:240 }} bordered = {false} className='choosecard' >
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
