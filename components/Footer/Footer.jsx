import Footer1 from "./Carousels";
import { Col, Row , Card ,Button , Input } from 'antd';
import Carousels from "./Carousels";
import Bottom from "./Bottom";
import Care from "./Care";
import Cards from "./Cards";
import Choose from "./Choose";


const Footer = () => {
     
        return (
           <>
           <h1 className="paddingtopbottom" style={{textAlign:"center"}}>We Care.</h1>
           <div className="paddingtopbottom">
            <Care></Care>
           </div>
           <div className="paddingtopbottom"></div>
            <Cards></Cards>
            <div className="paddingtopbottom"></div>
            <h1 style={{textAlign:"center"}}>Why Choose Us.</h1>
            <Choose></Choose>
            <h2 className="paddingtopbottom" style={{textAlign:"center"}}>They ❤️ Us</h2>
            <Carousels></Carousels>
            <Bottom></Bottom>
           </>
        );
    
}

export default Footer;
