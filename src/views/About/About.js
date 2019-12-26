import React from "react";
import gif from "./giphy.gif";
import { Layout, Menu, Breadcrumb, Col, Row } from "antd";

const { Header, Content, Footer } = Layout;

const About = props => {
  return (
    <Content className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item
            key="1"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <a href="https://github.com/huancnttuet">About me</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>...</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <img src={gif} alt="ảnh chứ cái gì :D" />
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Procon UI ©2019 Created by Huan
      </Footer>
    </Content>
  );
};

export default About;
