import React from "react";
import { Layout } from "antd";

import MenuList from "../MenuList";

const { Header, Content, Footer } = Layout;

const Index = (props) => {
  return (
    <>
      <Layout>
        <Header>
          {/* <div>logo</div> */}
          <MenuList />
        </Header>

        <Content style={{ padding: "30px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          jinhuajin ©2019-12-04 Created by jinhuajin
        </Footer>
      </Layout>
    </>
  );
};
export default Index;
