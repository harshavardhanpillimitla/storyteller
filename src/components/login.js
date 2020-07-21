import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../store/gameSlice";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  componentDidUpdate() {
    const token = this.props.user;
    const localtoken = localStorage.getItem("token");

    if (token && localtoken) {
      this.props.history.replace("/home");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = this.state;
      this.props.dispatch(login(data));
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="container ml-auto mr-auto mt-5">
        <div className="alert alert-info text-center ">Login</div>
        {this.props.last && (
          <div className="form-group alert alert-info text-center">
            {this.props.last}
          </div>
        )}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={this.onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.isAuthenticated,
    last: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
