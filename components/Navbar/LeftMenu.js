import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <div className='drawer'>
        <SubMenu key="sub1" title={<span>Plan Your Trip</span>}>
          <MenuItemGroup title="Start Here">
            <Menu.Item key="setting:1">Andamans Guide</Menu.Item>
            <Menu.Item key="setting:2">How To Reach </Menu.Item>
            <Menu.Item key="setting:3">Best Time To Visit</Menu.Item>
            <Menu.Item key="setting:4">Entry Formaliteis</Menu.Item>
            <Menu.Item key="setting:5">Do's and Don'ts</Menu.Item>
            <Menu.Item key="setting:6">Covid-19 Travel</Menu.Item>
            <Menu.Item key="setting:7">Travel Blog</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Popular Islands">
            <Menu.Item key="setting:8">Port Blair Guide</Menu.Item>
            <Menu.Item key="setting:9">Havelock Guide</Menu.Item>
            <Menu.Item key="setting:10">Neil Island Guide</Menu.Item>
            <Menu.Item key="setting:11">Baratang Guide</Menu.Item>
            <Menu.Item key="setting:12">Long Island Guide</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="More Guides">
            <Menu.Item key="setting:13">Rangat Guide</Menu.Item>
            <Menu.Item key="setting:14">Mayabunder Guide</Menu.Item>
            <Menu.Item key="setting:15">Diglipur Guide</Menu.Item>
            <Menu.Item key="setting:16">Little Andaman</Menu.Item>
            <Menu.Item key="setting:17">Great Nicobar</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay1">
          <a href="https://www.go2andaman.com/book-tours/">Book Tours</a>
        </Menu.Item>
        <Menu.Item key="alipay2">
          <a href="https://www.go2andaman.com/online-ferry-booking/">Book Ferry</a>
        </Menu.Item>
        <Menu.Item key="alipay3">
          <a href="https://www.go2andaman.com/blog/">Travel Blogs</a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/contact-us/">Contact Us</a>
        </Menu.Item>
      </div>
      <div className='nondrawer'>

        <SubMenu key="sub1" title={<span>Plan Your Trip</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/andaman-holiday-planning/'>Trip Planning Guide</a></Menu.Item>
            <Menu.Item key="setting:2"><a hred='https://www.go2andaman.com/andaman-nicobar-islands/best-time-to-travel/'>Best Time To visit</a> </Menu.Item>
            <Menu.Item key="setting:2"><a hred='https://www.go2andaman.com/andaman-nicobar-islands/how-to-reach-andaman/'>How To Reach Andaman And Nicobar Islands</a> </Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/?page_id=1243103'>Best hotels In Andaman</a></Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/top-55-places-to-visit-in-andaman/'>Top Sightseeing Places</a></Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/top-50-things-to-do-in-andaman/'>Things to do</a></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub11" title={<span>Travel Guides </span>}>
          <MenuItemGroup title="">
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/andaman-nicobar-islands/'>Andaman Travel Guide</a></Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/explore/port-blair/'>Port Blair</a></Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/explore/havelock-island/'>Havelock Island</a></Menu.Item>
            <Menu.Item key="setting:1"><a href='https://www.go2andaman.com/explore/neil-island/'></a>Neil Island</Menu.Item>
            {/* <Menu.Item key="setting:1"><a href=''></a></Menu.Item> */}
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/online-ferry-booking/">Book Ferry Tickets</a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/book-tours/">Book Tours</a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/covid-19-reopening-andaman-tourism-updates/">Covid-19 Travel Update</a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/blog/">Travel Blog</a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="https://www.go2andaman.com/contact-us/">Contact Us</a>
        </Menu.Item>

      </div>

    </Menu>
  );
}

export default LeftMenu;
