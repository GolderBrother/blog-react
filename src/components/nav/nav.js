import "./index.less";
import logo from "@/assets/logo.jpg";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Layout,
  Icon,
  Menu,
  Row,
  Col,
  Button,
  Drawer,
  message,
  Avatar
} from "antd";
import Register from "../register/register";
import Login from "../login/login";
import { isMobileOrPc, getQueryStringByName } from "@/utils/utils";

import https from "@/utils/https";
import urls from "@/utils/urls";
import { loginSuccess, loginFailure } from "@/store/actions/user";
import LoadingCom from "../loading/loading";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menuList =  [{
  path: "/", type: "home", title: "首页"
},{
  path: "/articles", type: "fire", title: "文章"
},{
  path: "/archive", type: "project", title: "归档"
},{
  path: "/project", type: "database", title: "项目"
},{
  path: "/timeLine", type: "hourglass", title: "历程"
},{
  path: "/message", type: "message", title: "留言"
},{
  path: "/about", type: "user", title: "关于"
},{
  path: "", type: "book", title: "简历", onClick: () => window.location.href = "http://116.62.6.228:8001/"
}];

@connect(
  state => state.user,
  { loginSuccess, loginFailure }
)
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      visible: false,
      placement: "top",
      current: null,
      menuCurrent: "",
      login: false,
      register: false,
      nav: "首页",
      navTitle: "首页",
      code: "",
      isLoading: false
    };
    this.menuClick = this.menuClick.bind(this);
    this.goResumePage = this.goResumePage.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showRegisterModal = this.showRegisterModal.bind(this);
    this.handleLoginCancel = this.handleLoginCancel.bind(this);
    this.handleRegisterCancel = this.handleRegisterCancel.bind(this);
    this.initMenu = this.initMenu.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {
    if (isMobileOrPc()) {
      this.setState({
        isMobile: true
      });
    }
    const code = getQueryStringByName("code");
    if (code) {
      this.setState(
        {
          code
        },
        () => {
          if (!this.state.code) {
            return;
          }
          this.getUser(this.state.code);
        }
      );
    }
    this.initMenu(this.props.pathname);
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  initMenu(name) {
    let key = "9";
    let navTitle = "";
    if (name === "/") {
      key = "0";
      navTitle = "首页";
    } else if (name === "/articles") {
      key = "1";
      navTitle = "文章";
    } else if (name === "/archive") {
      key = "2";
      navTitle = "归档";
    } else if (name === "/project") {
      key = "3";
      navTitle = "项目";
    } else if (name === "/timeLine") {
      key = "4";
      navTitle = "历程";
    } else if (name === "/message") {
      key = "5";
      navTitle = "留言";
    } else if (name === "/about") {
      key = "6";
      navTitle = "关于我";
    // } else if (name === "/articleDetail") {
    //   key = "6";
    //   navTitle = "文章详情";
    // } else if (name === "/archive") {
    //   key = "8";
    //   navTitle = "归档";
    }
    this.setState({
      navTitle,
      menuCurrent: key
    });
  }

  componentWillReceiveProps(nextProps) {
    this.initMenu(nextProps.pathname);
  }

  async getUser(code) {
    this.setState({
      isLoading: true
    });
    try {
      const res = await https.post(
        urls.getUser,
        {
          code
        },
        { withCredentials: true }
      );
      if (!res) return;
      this.setState({
        isLoading: false
      });
      if (res.status === 200 && res.data.code === 0) {
        this.props.loginSuccess(res.data);
        let userInfo = {
          _id: res.data.data._id,
          name: res.data.data.name,
          avatar: res.data.data.avatar
        };
        window.sessionStorage.userInfo = JSON.stringify(userInfo);
        message.success(res.data.message, 1);
        this.handleLoginCancel();
        // 跳转到之前授权前的页面
        let preventHistory = JSON.parse(window.sessionStorage.preventHistory);
        if (preventHistory) {
          this.props.history.push({
            pathname: preventHistory.pathname,
            search: preventHistory.search
          });
        }
      } else {
        this.props.loginFailure(res.data.message);
        message.error(res.data.message, 1);
      }
    } catch (error) {
      this.setState({
        isLoading: false
      });
      console.log(error);
    }
  }

  handleMenu = e => {
    this.setState({
      menuCurrent: e.key
    });
  };

  handleLogout = e => {
    this.setState({
      current: e.key
    });
    window.sessionStorage.userInfo = "";
    this.onClose();
  };

  // 前往我的简历页面
  goResumePage(){
    window.location.href = "http://116.62.6.228:8001/";
  }

  showLoginModal() {
    this.onClose();
    this.setState({
      login: true
    });
  }
  showRegisterModal() {
    this.onClose();
    this.setState({
      register: true
    });
  }
  handleLoginCancel() {
    this.setState({
      login: false
    });
  }
  handleRegisterCancel() {
    this.setState({
      register: false
    });
  }
  menuClick({ key }) {
    this.setState({
      nav: key
    });
  }
  render() {
    let userInfo = "";
    if (window.sessionStorage.userInfo) {
      userInfo = JSON.parse(window.sessionStorage.userInfo);
    }

    return (
      <div className="left">
        {this.state.isMobile ? (
          <Header
            className="header"
            style={{
              position: "fixed",
              zIndex: 1,
              top: 0,
              width: "100%",
              height: "64px",
              float: "left",
              backgroundColor: "white",
              borderBottom: "1px solid #eee"
            }}
          >
            <Row className="container">
              <Col style={{ width: "25%", float: "left", lineHeight: "64px" }}>
                {/* <a href="http://golderBrother.cn/main.html"> */}
                <a href="/">
                  <div className="logo">
                    <img src={logo} alt="" />
                  </div>
                </a>
              </Col>
              <Col style={{ textAlign: "center", width: "50%", float: "left" }}>
                <div className="nav-title"> {this.state.navTitle} </div>
              </Col>
              <Col style={{ textAlign: "right", width: "25%", float: "left" }}>
                <div>
                  <Icon
                    type="bars"
                    onClick={this.showDrawer}
                    style={{
                      fontSize: "40px",
                      marginRight: "10px",
                      marginTop: "10px"
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Header>
        ) : (
          <Header
            className="header "
            style={{
              position: "fixed",
              zIndex: 1,
              top: 0,
              width: "100%",
              minWidth: "1200px",
              height: "66px",
              float: "left",
              backgroundColor: "white",
              borderBottom: "1px solid #eee"
            }}
          >
            <Row className="container">
              <Col style={{ width: "120px", float: "left" }}>
                <a href="/">
                  <div className="logo ">
                    <img src={logo} alt="" />
                  </div>
                </a>
              </Col>
              <Col style={{ width: "780px", float: "left" }}>
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  onClick={this.handleMenu}
                  selectedKeys={[this.state.menuCurrent]}
                  style={{ lineHeight: "64px", borderBottom: "none" }}
                >
                  {
                    menuList && menuList.map((menu, index) => (
                      (
                        <Menu.Item key={index} selectedKeys={true} onClick={menu.onClick || null}>
                          <Link to={menu.path}> 
                            <Icon type={menu.type} theme="outlined" />
                            {menu.title}
                          </Link>
                        </Menu.Item>
                      )
                    ))
                  }
                </Menu>
              </Col>
              <Col
                style={{ textAlign: "right", width: "300px", float: "left" }}
              >
                {userInfo ? (
                  <Menu
                    onClick={this.handleLogout}
                    style={{
                      width: 220,
                      lineHeight: "64px",
                      display: "inline-block"
                    }}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                  >
                    <SubMenu
                      title={
                        <span className="submenu-title-wrapper">
                          <Avatar
                            onClick={this.showDrawer}
                            size="large"
                            icon="user"
                            src={userInfo.avatar}
                            style={{ marginRight: 5 }}
                          />
                          {userInfo.name}
                        </span>
                      }
                    >
                      <MenuItemGroup>
                        <Menu.Item key="logout">退出</Menu.Item>
                      </MenuItemGroup>
                    </SubMenu>
                  </Menu>
                ) : (
                  <div>
                    <Button
                      type="primary"
                      icon="login"
                      style={{ marginRight: "15px" }}
                      onClick={this.showLoginModal}
                    >
                      登 录
                    </Button>
                    <Button
                      type="danger"
                      icon="logout"
                      style={{ marginRight: "15px" }}
                      onClick={this.showRegisterModal}
                    >
                      注 册
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Header>
        )}

        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          height={420}
        >
          <div className="drawer">
            <p onClick={this.onClose}>
              <Link to="/">
                <Icon type="home" /> 首页
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/articles">
                <Icon type="ordered-list" /> 文章
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/article">
                <Icon type="fire" onClick={this.showLoginModal} /> 热门
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/archive">
                <Icon type="project" onClick={this.showLoginModal} /> 归档
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/project">
                <Icon type="project" onClick={this.showLoginModal} /> 项目
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/timeLine">
                <Icon type="hourglass" onClick={this.showLoginModal} /> 历程
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/message">
                <Icon type="message" onClick={this.showLoginModal} /> 留言
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/about">
                <Icon type="user" onClick={this.showLoginModal} /> 关于
              </Link>
            </p>
            <p onClick={this.onClose}>
              <Link to="/resume">
                <Icon type="book" onClick={this.goResumePage} /> 个人简历
              </Link>
            </p>
            
            {userInfo ? (
              <div onClick={this.handleLogout}>
                <p>{userInfo.name}</p>
                <p>
                  <Icon type="logout" /> 退出
                </p>
              </div>
            ) : (
              <div>
                <p onClick={this.showLoginModal}>
                  <Icon type="login" /> 登录
                </p>
                <p onClick={this.showRegisterModal}>
                  <Icon type="logout" /> 注册
                </p>
              </div>
            )}
          </div>
        </Drawer>
        <Login
          visible={this.state.login}
          handleCancel={this.handleLoginCancel}
        />
        <Register
          visible={this.state.register}
          handleCancel={this.handleRegisterCancel}
        />
        {this.state.isLoading ? (
          <div style={{ marginTop: 100 }}>
            <LoadingCom />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
