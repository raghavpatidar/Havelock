import React, { useEffect , useState } from "react";
import { Button, Card } from "antd";
import { Typography } from "antd";
import { Divider } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");
import { Image } from "antd";
import { useContext } from "react";
import { MobxContext } from "../pages/_app";
import { Anchor } from "antd";
import {  Grid } from 'antd';
import { observer } from "mobx-react-lite";
const { useBreakpoint } = Grid;
const { Title } = Typography;
const { Link } = Anchor;

const Homepage = () => {
  const { getData: data } = useContext(MobxContext);
  const [toggle, settoggle] = useState(false);
  const { md } = useBreakpoint()
  function changeToggle() {
     settoggle(1 - toggle);
  }
  if (!data) {
    return <></>;
  }
  return (
    <Content style={{ padding: "" , textAlign:"" }} className='homecontent'>
      <Title id={0}  level={4}>Table of Content</Title>
      <Card>
        <ul>
          
             {data["Table-of-content"]["location"].map(
               (val , idx) => {
                 return (
                   <>
                  <li >
                    <a  href={"#"+(idx+1)} >
                      
                    <p>{val.title}</p>
                    </a>
                    </li>
                </>
              );
            }
            )}
            </ul>
      </Card>
      
      <Title id={1}  level={4} style={{textAlign:"center"}}>About Havelock Island</Title>
      <Card>
        Havelock in short, is paradise. It’s an island tucked away from the
        crowds in the warm waters of the Andaman Ocean. The island is covered
        mostly in dense jungle and fringed with white sandy beaches shaded by
        tall green trees. Diving in the crystal clear waters with shades of
        turquoise blue an experience that all must explore. Tourists simply love
        its picture perfect beaches, laid back vibe and amazing underwater
        world. As far as islands in the Andamans go, Havelock is definitely the
        most tourism friendly and consequently the most visited. There are all
        sorts of accommodation options from bamboo cottages to luxury villas,
        great multinational cuisine restaurants, souvenir shops, ATMs and now
        even (slow but accessible) Internet cafés. You’ll find almost everything
        you need here, but at a slower pace. And even though it is one of the
        most visited islands in the Andamans it sees only a fraction of the
        visitors that crowd other paradise destinations around the globe.
      </Card>
      <Divider />
      <Title id={2} level={4} style={{textAlign:"center"}}>How long to stay in Havelock?</Title>
      <Card>
        As a part of most travel itineraries, the place is known for the
        magnificent Radhanagar Beach, Elephanta Beach, Kalapathar beach, and
        water sports like Scuba Diving, Snorkeling, Kayaking. Hence, we
        recommend a minimum of a two-night stay at Swaraj Dweep(Havelock Island)
        and a comfortable three nights too if time permits.
      </Card>
      <Divider />
      <Title id={3} level={4} style={{textAlign:"center"}}>When to visit Swaraj Dweep? (Havelock)</Title>
      <Card>
        The tourist season falls between November and mid-May and the peak
        season is between December– March. The monsoon season is between June
        and September. One should always expect light rains even during other
        seasons since it’s a tropical island. Feb and March are considered the
        best for water sports due to low tides and better visibility. Read more
        for details on when is the best time to visit Havelock Island.
      </Card>
      <Divider />
      <Title id={4} level={4} style={{textAlign:"center"}}>How to Reach Havelock?</Title>
      <Card>
        Havelock Island can be reached by Sea and by Air, however, the easiest
        way to travel to Havelock would be by the Sea. Private and Government
        ferries operate from neighboring islands (Port Blair and Neil Island).
        However, we recommend private ferries, as the booking is hassle-free and
        doesn’t require waiting in line, the same can be booked through us for
        an easy and worry-free experience.
        <YouTube
          style={{ display: "flex", justifyContent: "center", margin: "50px" }}
          videoId={getYouTubeID("https://www.youtube.com/watch?v=PUy3JW3fwG4")}
        />
        A few private ferry companies that sail to havelock Island been listed
        below:
        <ul>
          {data["How-to-Reach-Havelock"]["private-ferry-companies"].map(
            (val) => {
              return (
                <>
                  <li>
                    <Link href={val.url} title={val.title} />
                  </li>
                </>
              );
            }
          )}
        </ul>
        Please click here for ferry timing and booking
      </Card>
      <Divider />
      <Title id={5} level={4} style={{textAlign:"center"}}>Directorate of Shipping Services</Title>
      <Card>
        Government-run boats are the lifeline for locals of Andaman. They
        connect almost all islands in the Andaman Islands (including the Nicobar
        group of islands). Bookings can only be made from the counters mentioned
        below.
        <ul>
          <li>
            <span style={{ color: "#f7772d" }}>Port Blair</span> – Phoenix Bay
            Jetty & Common Service Centers located around the town
          </li>
          <li>
            <span style={{ color: "#f7772d" }}>Havelock Island</span> – Havelock
            Jetty
          </li>
          <li>
            <span style={{ color: "#f7772d" }}>Neil Island</span> – Neil Jetty
          </li>
        </ul>
      </Card>
      <Divider />
      <Title id={6} level={4} style={{textAlign:"center"}}>Getting Around in Havelock</Title>
      <Card>
        Local transport in Swaraj Dweep (Havelock Island) is fairly simple.
        Roads are well set and straight. It is almost impossible to get lost as
        everything is just by the road and the locals are all very helpful. It
        also helps that Havelock’s beaches and villages are categorized with the
        help of numbers.
        <Divider plain />
        These are a few options we recommend:
        <>
           {data["Getting-Around-in-Havelock"]["location"].map(
            (val , idx) => {
              return (
                <>
                   <Title level={5}>{idx+1}. {val.title}</Title>
                   <p>{val.description}</p>
                </>
              );
            }
          )}
        </>
      </Card>
      <Divider />
      <Title id={7} level={4} style={{textAlign:"center"}}>Top things to do in Swaraj Dweep (Havelock)</Title>
      <Card>
        Havelock is known for its pristine beaches, crystal clear waters, and a
        variety of water sports that it has to offer. All thanks to the variety
        of activities the island has to offer, Havelock Island is a fun magnet
        that attracts anybody paying a visit to the Andaman Islands. Here are a
        few more things to do on Havelock Island.
        <Divider plain />
        <>
         {data["Top-Things-to-do-in-Swaraj-Dweep"]["location"].map(
            (val, idx) => {
              return (
                <>
             <a href={val.url}> <Title level={5}  style={{color:"#01b46c"}}>{idx+1}. {val.title}</Title></a>
              <Image
                width={"100%"}
                height={"min(100%,500px)"}
                src={val.img}
              />
              <p>{val.description}</p>
                </>
              );
            }
          )}
        </>
      </Card>
      <Divider />
      <Title id={8} level={3} style={{textAlign:"center"}}>Hotels & Resorts in Swaraj Dweep (Havelock)</Title>
      <Card>
        The tourist infrastructure in Havelock is the best among all the islands
        in the Andamans. You can find beach resorts at budget rates or more
        luxurious cottages at a premium cost. Prices range from INR 1000 a night
        for a budget stay, INR 3000 for mid-budget stays, and INR 25,000 for
        luxurious stays. However, fares vary between peak and low depending on
        the tourist seasons. During peak season, prices can shoot up and the
        best places fill up fast. It is advisable to book ahead.
        <Divider plain />
        <ul>
          <li>
            <span style={{ color: "#f7772d" }}>Low Budget: </span> INR 500- 3000
          </li>
          <li>
            <span style={{ color: "#f7772d" }}>Mid-Range: </span> INR 4000- 8000
          </li>
          <li>
            <span style={{ color: "#f7772d" }}>Premium Stays:</span> INR 15000-
            25000
          </li>
        </ul>
        <Title level={4}>
          List of some of the recommended places to stay in Havelock
          
        </Title>
        <>
          {data["List-of-some-of-the-recommended-places-to-stay-in-Havelock"]["location"].map(
            (val , idx) => {
              return (
                <>
                   <Title level={5}>{idx + 1}. {val.title}</Title>
                  
                   <p>{val.description}</p>
                </>
              );
            }
          )}
          {/* Located on the Radha Nagar Beach in Havelock, this place needs no
          introduction. Luxurious rooms with beautiful views and amazing
          restaurants on the property are the best way to pamper yourself. */}
        </>
        <Title level={4} style={{textAlign:"center"}}>
          Here is a list of other stays which we also recommend:
        </Title>
        <ul>
            {data["Here-is-a-list-of-other-stays-which-we-also-recommend"]["location"].map(
            (val , idx) => {
              return (
                <>
                  <li style={{color :"#f7772d"}}>{val.title}</li>
                </>
              );
            }
          )}
        </ul>
      </Card>
      <>
       <Title id={9} level={4}>Eat/Dine/Night Life in Havelock</Title>
       <Card>
        <p>Havelock provides various cuisines for the comfort of its guests from India and all over the world. From Indian cuisines with various dietary restrictions to scrumptious continental cuisine  – nothing is amiss. And lest we forget, the seafood options are plenty and everywhere!<b> Grilled Fish is a must-have</b>, especially at some local eateries in the market.</p>
        <p>For cheaper meals, some hotels will let you buy bread, which you can toast in their kitchens. You can even try simple vegetarian and non-vegetarian thalis – cheap meals of plain rice, vegetables, dal(lentil soup), and meat at INR 150 – INR 200 per plate.</p>
       </Card>
      </>
      <>
       <Title  id={10} level={4}>Important info about Havelock</Title>
       <Card>
        <>
           {data["Important-info-about-Havelock"]["location"].map(
            (val , idx) => {
              return (
                <>
                   <Title level={5}>{idx+1}. {val.title}</Title>
                   <p>{val.discription}</p>
                </>
              );
            }
          )}
        </>
       </Card>
      </>
      <>
       <Title id={11} level={4}>Cost In Havelock</Title>
       <Card>
        <>
           {data["Cost-in-Havelock"]["location"].map(
            (val , idx) => {
              return (
                <>
                   <Title level={5}>{idx+1}. {val.title}</Title>
                   <p dangerouslySetInnerHTML={{__html: (val.description)}}></p>
                </>
              );
            }
          )}
        </>
       </Card>
      </>
      <>
       <Title id={12} level={4}>FAQs about Havelock</Title>
       <Card>
        <>
       <ul>

         {data["FAQs"]["locations"].map(
           (val , idx) => {
             return (
               <>
                  <li>
                    <Title level={5}>
                    {val.title}
                    </Title>
                    </li>
                  <p>{val.description}</p>
                </>
              );
            }
            )}
      
     
            </ul>
        </>
       </Card>
      </>
      <Divider />
    </Content>
  );
};

export default observer(Homepage);
// export default observer(Homepage);
