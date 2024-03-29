import { Layout } from "antd";
import { Component } from "react";
import AppHeader from "./components/Header";
import { Route, Switch } from "react-router-dom";
import "./layout.css";
import Detail from "./containers/Detail";
import ContentList from "./containers/List";
// import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;

class NewLayout extends Component {
  render() {
    return (
      <Layout style={{ minWidth: 800 }}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Content className="content">
          {/* <BrowserRouter className="browserRouter"> */}
          <Switch>
            <Route path="/1" component={ContentList}></Route>
            <Route path="/2" component={Detail}></Route>
            <Route path="/:id" component={ContentList}></Route>
          </Switch>
          {/* </BrowserRouter> */}
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}

export default NewLayout;
