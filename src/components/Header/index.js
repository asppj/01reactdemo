import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import "./index.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreAddOutlined,
  WechatOutlined,
  GooglePlusOutlined,
  DribbbleSquareOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
const iconMap = {
  mail: <MailOutlined />,
  app: <AppstoreAddOutlined />,
  idcard: <AppstoreAddOutlined />,
  setting: <AppstoreAddOutlined />,
  wechat: <WechatOutlined />,
  default: <AppstoreAddOutlined />,
  google: <GooglePlusOutlined />,
  dribbble: <DribbbleSquareOutlined />,
};
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.getMenuItems = this.getMenuItems.bind(this);
  }
  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/header.json").then((res) => {
      console.log("one", res);
      this.setState({ list: res.data.data });
    });
  }
  getMenuItems() {
    return this.state.list.map((item) => {
      return (
        <Menu.Item key={item.id}>
          <Link to={`${item.id}`}></Link>
          {this.getIconByType(item.icon)}
          {item.title}
        </Menu.Item>
      );
    });
  }
  getIconByType(t) {
    if (t in iconMap) {
      return iconMap[t];
    }
    return iconMap["default"];
  }
  render() {
    return (
      <Fragment>
        <img src={logo} alt="logo" className="app-header-logo" />
        <Menu mode="horizontal" className="app-header-menu">
          {this.getMenuItems()}
        </Menu>
      </Fragment>
    );
  }
}

export default AppHeader;
