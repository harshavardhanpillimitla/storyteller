import React, { Component } from "react";

import { connect } from "react-redux";
import { getpost, post } from "../store/gameSlice";

class JOin extends Component {
    state = {
        search: 11,
    };

    onChange = (e) => {

        this.setState({ [e.target.id]: parseInt(e.target.value) });
    };
    onSubmit = async (e) => {
        e.preventDefault();

        if (true) {
            const jwt = this.props.state.user.token;

            if (jwt) {
                try {
                    const headers = {
                        "Content-Type": "application/json",
                        Authorization: `JWT ${jwt}`,
                    };
                    alert("hi")
                    this.props.dispatch(getpost(headers, this.state.search))
                } catch (error) {
                    console.log(error.response);
                }
            }

        }
    };
    onClick = () => {
        const game = this.props.state.gamestate.join(",");

        const data = {
            playerchance: this.props.state.playerchance,

            game,

            availablemaks: 15,
            availablepuli: 0,

            kill: 0,

        };
        console.log(data)
        const jwt = this.props.state.user.token;

        if (jwt) {
            try {
                const headers = {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${jwt}`,
                };

                this.props.dispatch(post(data, headers));
            } catch (error) {
                console.log(error.response);
            }
        }
    }


    render() {
        console.log(this.props);
        return (
            <div className="container ml-auto mr-auto mt-5">
                <div className="alert alert-info text-center ">game start </div>
                {this.props.last && (
                    <div className="form-group alert alert-info text-center">
                        {this.props.last}
                    </div>
                )}

                <button className="btn btn-primary" onClick={this.onClick}>
                    create
                </button>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">enter game join id ask you frnd!!</label>
                        <input
                            type="number"
                            className="form-control"
                            id="search"
                            aria-describedby="emailHelp"
                            onChange={this.onChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            playlist
            </small>
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
        authenticated: state.isAuthenticated,
        state: state,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(JOin);
