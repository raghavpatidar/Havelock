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
    <Content style={{ padding: "50px" , color:"#01b46c" }}>
       <Card>
        <Title level={2} style={{color:"#01b46c" }}>Popular Tourists Islands</Title>
             <ul>
                {data["TouristIslands"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c" }}>{val.title}</p>
                               </a>
                            </li>
                        </>
              );
            }
            )}
            </ul>

        <Title className="paddingtopbottom" level={2} style={{color:"#01b46c" }}>About Andamam Islands</Title>
             <ul>
                {data["AndamandIslands"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c" }}>{val.title}</p>
                               </a>
                            </li>
                        </>
              );
            }
            )}
            </ul>
        <Title className="paddingtopbottom" level={2} style={{color:"#01b46c" }}>Places To Visit</Title>
             <ul>
                {data["PlacesToVisit"]["location"].map(
                    (val , idx) => {
                        return (
                            <>
                             <li >
                               <a href={val.url}>
                                     <p style={{color:"#01b46c" }}>{val.title}</p>
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
