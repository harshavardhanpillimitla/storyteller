import React, { Component } from "react";

import { register } from "../store/gameSlice";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  };
  componentDidUpdate() {
    if (this.props.registered) {
      this.props.history.replace("/");
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    try {
      const data = this.state;

      // axios.post('https://backendemployeeapi.herokuapp.com/users/',data)
      // .then(res => {
      //     alert('maybe success');
      //     this.props.history.replace('/')
      // })
      this.props.dispatch(register(data));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container ml-auto mr-auto">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.onChange}
              value={this.state.email}
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">first name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              onChange={this.onChange}
              value={this.state.first_name}
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">last name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              onChange={this.onChange}
              value={this.state.last_name}
              aria-describedby="emailHelp"
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
              value={this.state.password}
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
    registered: state.justUpdated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
