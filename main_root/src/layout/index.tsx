import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from "umi"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ClusterOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function LayoutPage(props:any) {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const [selectedMenuKey,setSelectedMenuKey] = useState<Array<string>>([history.location.pathname]);

  const menuChange = (router: { key: string; })=>{
    history.push(router.key)
    console.log(history)
    setSelectedMenuKey([router.key])
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img
            src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png"
            alt="乾坤"
            title="微前端(qiankun + umi)"
          />
        </div>
        <Menu theme="dark" mode="inline"   selectedKeys={selectedMenuKey} onClick={menuChange}>
          <SubMenu
            key="main"
            icon={<ClusterOutlined />}
            title="主应用"
          >
            <Menu.Item key="/main/first">主应用页面1</Menu.Item>
            <Menu.Item key="/main/second">主应用页面2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub"
            icon={<ApartmentOutlined />}
            title="vue2.0子应用"
          >
            <Menu.Item key="/vue2/">子应用1_1</Menu.Item>
            <Menu.Item key="/vue2/about">子应用1_2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<ApartmentOutlined />}
            title="vue3.0子应用"
          >
            <Menu.Item key="/vue3/">子应用2_1</Menu.Item>
            <Menu.Item key="/vue3/about">子应用2_2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="react"
            icon={<ApartmentOutlined />}
            title="react子应用"
          >
            <Menu.Item key="/react/">子应用</Menu.Item>
          </SubMenu>
          <SubMenu
            key="purehtml"
            icon={<ApartmentOutlined />}
            title="原生HTML子应用"
          >
            <Menu.Item key="/purehtml">HTML子应用</Menu.Item>
          </SubMenu>
          {/* http://localhost:8003/ */}
          <SubMenu
            key="umi"
            icon={<ApartmentOutlined />}
            title="Umi子应用"
          >
            <Menu.Item key="/umi">umi子应用</Menu.Item>
          </SubMenu>

          <SubMenu
            key="angular"
            icon={<ApartmentOutlined />}
            title="Angular子应用"
          >
            <Menu.Item key="/angular">Angular子应用</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content className="site-layout-content">
          <div className="layout-content_container">{props.children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
