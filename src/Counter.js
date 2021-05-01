import { Component } from "react";
// import axios from "axios";
import ButtonGroup from "antd/lib/button/button-group";
import { Button } from "antd";
import { List } from "antd";

const dataList = ["1", "2", "3", "4"];

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  // 点击执行
  handleClick() {
    console.log("window click");
  }
  // 绑定
  componentDidMount() {
    window.addEventListener("click", this.handleClick);
    // 发送ajax请求
    // const promise = axios.get("https://www.baidu.com");
    // promise
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }
  // 解绑
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button type="primary">按钮</Button>
          <Button type="danger">danger</Button>
          <Button type="default">default</Button>
        </ButtonGroup>
        <List
        stype={
            {margin:10}
        }
          header={<h2>Header</h2>}
          footer={<h4>Footer</h4>}
          bordered
          dataSource={dataList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        ></List>
      </div>
    );
  }
}

export default Counter;
