import { Col, Row , Card  , Input , Button } from 'antd';
const Cards = () => {
     
        return ( 
                <>
                    <Row style={{padding:"0 50px 0 50px"}}>
                      <Col xs={{ span: 18, offset:6}} lg={{ span: 6, offset: 2 }}>
                            <Card title="Subscribe to Mailer" 
                            hoverable ={true}
                            
                            extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{ width: 300 ,height:245 }}>
                                  <p>Stay updated with all the excitement that Andamans has to offer</p>
                                  <Input type="email" placeholder='email' />
                                  <Button  style={{float : 'right'}} className='btn'>Subscribe</Button>
                            </Card>
                     </Col>
                     <Col xs={{ span: 18, offset: 6 }} lg={{ span: 6, offset: 2 }}>
                          <Card title="Collaborate with us for Blog/content" 
                       
                                hoverable ={true}
                                extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/10/blog.png?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{ width: 300 ,height:245 }}>
                                  <p>If you have a flair for writing, write for us and get featured.</p>
                                  <Button  style={{float : 'right'}} className='btn'>Find out How</Button>
                            </Card>
                     </Col>
                     <Col xs={{ span: 18, offset: 6 }} lg={{ span: 6, offset: 2 }}>
                          <Card title="Be your own tour Guide" 
                                hoverable ={true}
                            extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/tour.svg?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{ width: 300 , height:245 }}>
                                  <p>Get lost or never. You decide. Download our handy tour guides to plan your trip.</p>
                                  <Button style={{float : 'right'}} className='btn'>download</Button>
                            </Card>
                     </Col>
                </Row>
                </>
        );
    
}

export default Cards ;
