import React, { useEffect , useState } from "react";
import { Button, Card } from "antd";
import { Typography } from "antd";
import { Divider } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

import { useContext } from "react";
import { MobxContext } from "../pages/_app";


import { observer } from "mobx-react-lite";
const { Title } = Typography;


const SideComp = () => {
  const { getData: data } = useContext(MobxContext);
  if (!data) {
    return <></>;
  }
  return (
    <Content style={{ padding: "0px" , color:"#01b46c" }}>
       <Card>
        <Title level={3} style={{color:"#01b46c",textAlign:"center", lineHeight:"90%"}}>Popular Tourists Islands</Title>
             <ul>
                {data["TouristIslands"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li style={{lineHeight:"80%"}} >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c", fontWeight:450 }}>{val.title}</p>
                               </a>
                            </li>
                        </>
              );
            }
            )}
            </ul>

        <Title className="paddingtopbottom" level={3} style={{color:"#01b46c" ,textAlign:"center" }}>About Andamam Islands</Title>
             <ul>
                {data["AndamandIslands"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li style={{lineHeight:"80%"}} >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c", fontWeight:450 }}>{val.title}</p>
                               </a>
                            </li>
                        </>
              );
            }
            )}
            </ul>
        <Title className="paddingtopbottom" level={3} style={{color:"#01b46c" ,textAlign:"center" }}>Places To Visit</Title>
             <ul>
                {data["PlacesToVisit"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li style={{lineHeight:"80%"}} >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c", fontWeight:450 }}>{val.title}</p>
                               </a>
                            </li>
                        </>
              );
            }
            )}
            </ul>
     </Card>
    </Content>
     );
};

export default observer(SideComp);
// export default observer(Homepage);
