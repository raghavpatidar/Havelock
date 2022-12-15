import { Col, Row , Card  , Input , Button } from 'antd';
const Cards = () => {
     
        return ( 
                <div >
                    <Row className='cardes'  gutter={[16,16]}>
                      <Col xs={{ span:24, offset:0}} lg={{ span: 8, offset: 0 }} style={{maxWidth:"300px"}}>
                            <Card  title="Subscribe to Mailer" 
                            hoverable ={true}
                            extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{  }}>
                                  <p>Stay updated with all the excitement that Andamans has to offer</p>
                                  <Input type="email" placeholder='email' />
                                  <Button  style={{float : 'right'}} className='btn'>Subscribe</Button>
                            </Card>
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span:8, offset:0}} style={{maxWidth:"300px"}}>
                          <Card  title="Collaborate with us for Blog/content" 
                       
                                hoverable ={true}
                                extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/10/blog.png?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{ }}>
                                  <p>If you have a flair for writing, write for us and get featured.</p>
                                  <Button  style={{float : 'right'}} className='btn'>Find out How</Button>
                            </Card>
                     </Col>
                     <Col xs={{ span: 24, offset: 0}} lg={{ span: 8, offset: 0 }} style={{maxWidth:"300px"}} >
                          <Card  title="Be your own tour Guide" 
                                hoverable ={true}
                            extra={<img className='cardimg' src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/tour.svg?compress=true&quality=90&w=128&dpr=1.3"></img>} style={{ }}>
                                  <p>Get lost or never. You decide. Download our handy tour guides to plan your trip.</p>
                                  <Button style={{float : 'right'}} className='btn'>download</Button>
                            </Card>
                     </Col>
                </Row>
                </div>
        );
    
}

export default Cards ;
