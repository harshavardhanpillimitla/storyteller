import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BaseGame from "./basegame";
import { connect } from "react-redux";
import { postupdate, post, refreshGame } from "../store/gameSlice";
import Join from "./join";

class App extends Component {
  state = {
    playerchance: this.props.state.playerchance,
    boxes: [
      "0,012,012,012,012",
      "1,3,4,5,6",
      "2,0,8,3,0",
      "3,1,9,4,2",
      "4,1,10,5,3",
      "5,1,11,6,4",
      "6,1,12,7,5",
      "7,0,13,0,6",
      "8,2,14,9,0",
      "9,3,15,10,8",
      "10,4,16,11,9",
      "11,5,17,12,10",
      "12,6,18,13,11",
      "13,7,19,0,12",
      "14,8,0,15,0",
      "15,9,20,16,14",
      "16,10,21,17,15",
      "17,11,22,18,16",
      "18,12,23,19,17",
      "19,13,0,0,18",
      "20,15,0,21,0",
      "21,16,0,22,20",
      "22,17,0,23,21",
      "23,18,0,0,22",
    ],
    gamestate: this.props.state.gamestate,
    // [
    //   "012",
    //   "2",
    //   "0",
    //   "0",
    //   "2",
    //   "2",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    // ],
    meks: [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
    puls: ["0", "0", "0"],
    availablemaks: this.props.state.availablemaks,
    availablepuls: this.props.state.availablepuls,
    currentmaks: 0,
    currentpuls: 3,
    playermove: "0",
    kill: this.props.state.kill,
    selectplayer: 0,
  };

  componentDidMount() {
    const timer = setInterval(() => this.refreshgamepost(), 15000);

  }

  refreshgamepost = () => {

    const jwt = localStorage.getItem("token")
    const gameid = localStorage.getItem("id")

    if (jwt) {

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `JWT ${jwt}`,
        };
        this.props.dispatch(refreshGame(headers, gameid));
      } catch (error) {
        console.log(error.response);
      }
    }
  }






  apiCallgamestateupdate = (data, gameid) => {
    const jwt = this.props.user.token;

    if (jwt) {

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `JWT ${jwt}`,
        };
        this.props.dispatch(postupdate(data, headers, gameid));
      } catch (error) {
        console.log(error.response);
      }
    }

  }
  onClicked = (basestate) => {
    if (this.props.state.playerchance === this.props.state.player) {
      this.setState({ ...this.state, gamestate: this.props.gamestate })
      let detail = basestate.boxclicked.split(",");
      let currentstate = basestate.currentstate;
      let nextstate = basestate.nextstate;
      let nextchanceplayer;
      let bridgestate = basestate.bridgestate;
      let gameplay = this.props.state.gamestate.map((state) => {
        return state;
      });
      console.log(gameplay, "hello")
      let pulstate = this.state.puls.map((state) => {
        return state;
      });
      let currentplayer = this.props.state.playerchance;
      let currentplayerstatus = this.state.playerchance;
      let avlm,
        curm,
        avlp,
        crp,
        k,
        kill = this.state.kill;
      let a = 99;
      // this.setState({ ...this.state, killer: a });

      if (gameplay[parseInt(detail[0])] === "0") {
        // console.log(currentplayer,this.state)
        if (currentplayer === "1" && this.state.availablemaks !== 0) {
          avlm = this.state.availablemaks - 1;
          curm = this.state.currentmaks + 1;
          // console.log("sate avlm",this.state.currentmaks);
          avlm = avlm;
          curm = curm;

          gameplay[parseInt(detail[0])] = currentplayer;
          this.setState({
            ...this.state,
            playerchance: "2",
            availablemaks: avlm,
            currentmaks: curm,
            gamestate: gameplay
          });
          const gameid = this.props.state.gameid;

          const data = {
            id: gameid,
            game: gameplay.join(","),
            availablemaks: avlm,
            availablepuli: 3,

            kill: kill,
            playerchance: "2",
            user: this.props.user.user.pk,
          };
          this.apiCallgamestateupdate(data, gameid)

          if (this.state.availablepuls === 0) {
            // alert("you have to move your puli");
          }
        } else {
          if (currentplayer === "2" && this.state.availablepuls !== 0) {
            avlp = this.state.availablepuls - 1;
            crp = this.state.currentpuls + 1;
            gameplay[parseInt(detail[0])] = currentplayer;

            this.setState({
              ...this.state,
              playerchance: "1",
              availablepuls: avlp,
              currentpuls: crp,
            });
            const gameid = this.props.state.gameid;

            const data = {
              id: gameid,
              game: gameplay.join(","),
              availablemaks: avlm,
              availablepuli: 3,

              kill: kill,
              playerchance: "1",
              user: this.props.user.user.pk,
            };
            this.apiCallgamestateupdate(data, gameid)

            // console.log(this.state.playerchance,1);
          }
        }

        this.setState({ gamestate: gameplay });
      } else {
        if (currentstate !== "" && nextstate !== "") {
          let playerid = gameplay[parseInt(currentstate)];
          let nextchance;
          if (bridgestate !== "0") {
            k = this.state.kill;
            kill = k + 1;

            gameplay[parseInt(bridgestate)] = "0";
          }
          gameplay[parseInt(currentstate)] = "0";
          gameplay[parseInt(nextstate)] = playerid;
          if (playerid === "1") {
            nextchance = "2";
          } else {
            nextchance = "1";
          }
          nextchanceplayer = nextchance;
          this.setState({
            ...this.state,
            playerchance: nextchance,
            gamestate: gameplay,
            kill: kill,
          });

        }
        const gameid = this.props.state.gameid;

        const data = {
          id: gameid,
          game: gameplay.join(","),
          availablemaks: avlm,
          availablepuli: 3,

          kill: kill,
          playerchance: nextchanceplayer,
          user: this.props.user.user.pk,
        };
        this.apiCallgamestateupdate(data, gameid)

      }

    }

  };


  render() {
    return (
      <div>

        <div>
          <BaseGame game={this.state} gamechange={this.onClicked} gamestater={this.props.state.gamestate} gameid={this.props.state.gameid} playerid={this.props.state.playerchance} display={this.props.state.playerchance === this.props.state.player} />

        </div>
        <div>
          {!this.props.state.gameid && <Join></Join>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    user: state.user,

    isAuthenticated: state.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



