import {Row , Col, Button} from 'antd'
const Bottom = () => {
     
        return ( 
                <>
                   <div className='bottom'>
                   
                 <Row align="bottom">
                      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 2 }}>
                        <img src='https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg'></img> 
                        <p>We’re a small crew of locals and Andaman-lovers helping you make the most of your trip to the Andamans.</p>
                        <p>You can build your holiday from the ground-up, exactly how you like. We’ve personally verified each experience, so you know that they’re tried, tested and true!</p>       
                        <a href='https://go2andaman-jobs.super.site/'>Find Out How</a>            
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 4, offset: 0 }}>                  
                         <h4>GO2ANDAMAN.COM</h4>  
                         <div className='bottomlink'>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/about-us/' style={{fontWeight:100}}>About Us</p>
                         <p className='fbtn' type='link' href='https://go2andaman-jobs.super.site/'>Jobs at G02Andaman</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/blog/'>Travel Blog</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/influencers/'>Influencers & Brands</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/reviews/'>Reviews</p>
                            </div> 
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 4, offset:0 }}>
                          <h4>For Travellers</h4>
                          <div className='bottomlink'>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/contact-us/'>Contact us</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/refund-and-cancellation-policy/'>Refund & Cancellation</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/terms-of-service/'>Terms of Service</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/content-disclaimer/'>Content</p>
                         <p className='fbtn' type='link' href='https://www.go2andaman.com/privacy-policy/'>Privacy Policy</p>
                          </div>
                     </Col>
                     <Col xs={{ span: 8, offset: 0 }} lg={{ span: 4, offset:0 }}>
                           <img src='https://ocean.go2andaman.com/wp-content/uploads/2020/12/startupindia-01.svg?dpr=1.0&q=70&compress=true&quality=90&w=160' style={{maxWidth : "150px"}}></img>
                     </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset:2 }} style={{float:"left"}}>
                         <p className='bottomlink'>WEBPORT MEDIA PVT LTD | CIN No: U63040AN2015PTC000278</p>
                        </Col>
                     <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset:0}} style={{textAlign:"right"}}>
                        
                           <img  src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/instagram.png?dpr=1.0&q=70&compress=true&quality=90&w=240' href='https://www.instagram.com/go2andaman/' style={{maxWidth : "80px" , marginLeft:"18px"}}></img>
                           <img  src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/facebook.png?dpr=1.0&q=70&compress=true&quality=90&w=240' href='https://www.facebook.com/go2andaman'  style={{maxWidth : "80px" , marginLeft:"18px"}}></img>
                           <img  src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/pinterest.png?dpr=1.0&q=70&compress=true&quality=90&w=240'  href='https://www.pinterest.com/go2andaman/' style={{maxWidth : "80px" , marginLeft:"18px"}}></img>
                           <img  src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/linkedin.png?dpr=1.0&q=70&compress=true&quality=90&w=240' href='https://www.linkedin.com/company/go2andaman.com'  style={{maxWidth : "80px" , marginLeft:"18px"}}></img>
                           <img  src='https://ocean.go2andaman.com/wp-content/uploads/2020/07/twitter.png?dpr=1.0&q=70&compress=true&quality=90&w=240' href='https://twitter.com/go2andaman'  style={{maxWidth : "80px" , marginLeft:"18px"}}></img>
                     </Col>
                  
                </Row>

                   </div>
                </>
        );
    
}

export default Bottom ;
