import React, { Component } from "react";
import { Modal, Input, Icon, message, Button } from "antd";
import { connect } from "react-redux";
import https from "@/utils/https";
import urls from "@/utils/urls";
import { MD5_SUFFIX, md5 } from "@/utils/utils";
import config from "@/utils/config";
import { loginSuccess, loginFailure } from "@/store/actions/user";

@connect(
  state => state.user,
  { loginSuccess, loginFailure }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async login({ email, password }) {
    try {
      const res = await https.post(
        urls.login,
        {
          email,
          password: md5(MD5_SUFFIX + password)
        },
        { withCredentials: true }
      );
      if (!res) return;
      if (res.status === 200 && res.data.code === 0) {
        this.props.loginSuccess(res.data);
        let userInfo = {
          _id: res.data.data._id,
          name: res.data.data.name,
          avatar: res.data.data.avatar
        };
        window.sessionStorage.userInfo = JSON.stringify(userInfo);
        message.success(res.data.message, 1);
        this.props.handleCancel();
        this.setState({
          email: "",
          password: ""
        });
      } else {
        this.props.loginFailure(res.data.message);
        message.error(res.data.message, 1);
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleOk() {
    const reg = new RegExp(
      "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
    );
    if (!this.state.email) {
      message.warn("邮箱不能为空！");
    } else if (!reg.test(this.state.email)) {
      message.warn("请输入格式正确的邮箱！");
    } else if (!this.state.password) {
      message.warn("密码不能为空");
    } else {
      this.login(this.state);
    }
  }
  handleOAuth() {
    // 保存授权前的页面链接内容
    let preventHistory = {
      pathname: window.location.pathname,
      search: window.location.search
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    // window.location.href = 'https://github.com/login/oauth/authorize?client_id=cfb7f07a30c09efe8f6d&redirect_uri=http://116.62.6.228/login'
    window.location.href = `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`;
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <Modal
        title="登录"
        style={{ top: "25%" }}
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        width={400}
        footer={null}
      >
        <div className="login-input">
          <Input
            style={{ marginBottom: 20 }}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            style={{ marginBottom: 40 }}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="login-submit">
          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            onClick={this.handleOk}
          >
            登录
          </Button>
          <Button style={{ width: "100%" }} onClick={this.handleOAuth}>
            github 授权登录
          </Button>
        </div>
      </Modal>
    );
  }
}

export default Login;
