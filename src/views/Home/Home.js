import React from "react";

import { Layout, Menu, Breadcrumb, List, Avatar } from "antd";
import gif from "./giphy.gif";

import musicBg from "./musicbg.mp3";
import musicBg2 from "./musicbg2.mp3";
import Button from "antd/lib/button/button";
const { Header, Content, Footer } = Layout;
const audio = new Audio(musicBg);
audio.play();
const data = [
  {
    title: "Có một công việc từ lập trình Web",
    description: "Web Developer tại Teko (FullStack)"
  },
  {
    title: "Nâng cấp laptop",
    description: "Thay SSD, mua thêm RAM, mua bàn phím 2 củ, chuột 4 loét"
  },
  {
    title: "Đi du lịch nhiều nơi",
    description: "Đi Đằ Nẵng :D"
  },
  {
    title: "Được nhiều bạn nữ tỏ tình :v",
    description: "Có 1 bạn thôi à =)))"
  }
];

const Home = props => {
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
          <Button
            onClick={() => {
              audio.play();
            }}
          >
            Play
          </Button>
          <Button
            onClick={() => {
              audio.pause();
            }}
          >
            Pause
          </Button>

          <h2>Những điều đạt được trong năm 2019</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={gif} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Procon UI ©2019 Created by Huan
      </Footer>
    </Content>
  );
};

export default Home;
