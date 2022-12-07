import { Breadcrumb, Layout, Menu, theme } from 'antd';

const {  Content, Footer } = Layout;

const Header = () => {
  return (
       <Content className="site-layout" style={{ padding: '0' }}>
      <div id="box-search">
      <div class="thumbnail">
           <img className='header' src  ='https://www.go2andaman.com/wp-content/uploads/2021/05/Havelock-Banner-Go2andaman.jpeg'></img>
          <div class="caption">
              <h1 class="">Havelock Island</h1>
              <h2 class="">Travel Guide - Top Things to Do & See, Hotel & Resorts, Restaurants & Cafe and more </h2>
          </div>
      </div>
  </div> 
      </Content>
  );
};

export default Header;