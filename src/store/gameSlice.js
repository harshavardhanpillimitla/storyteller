import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";
const initialState = {
  playerchance: "1",

  gamestate: [
    "012",
    "2",
    "0",
    "0",
    "2",
    "2",
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
    "0",
    "0",
    "0",
  ],

  availablemaks: 15,
  availablepuls: 0,

  kill: 0,

  user: [],
  error: "",
  isAuthenticated: false,
  justUpdated: false,
};

const Slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    tokenReceived: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.user["first_name"]);

      state.isAuthenticated = true;
      state.error = "";
    },
    errorOccoured: (state, action) => {
      state.error = action.payload;
    },
    changePosts: (posts, action) => {
      posts.justUpdated = true;
    },
    logedout: (posts, action) => {
      localStorage.clear();
      return initialState;
    },
    gamestateCreated: (state, action) => {
      state.availablemaks = action.payload.availablemaks;
      state.availablepuls = action.payload.availablepuls;
      state.kill = action.payload.kill;
      state.playerchance = action.payload.playerchance;
      state.gameid = action.payload.id;
      state.gamestate = action.payload.game.split(",");
      state.justUpdated = true;
      state.player = "1";
      localStorage.setItem("id", action.payload.id);
    },
    gamestateJoined: (state, action) => {
      state.availablemaks = action.payload.availablemaks;
      state.availablepuls = action.payload.availablepuls;
      state.kill = action.payload.kill;
      state.playerchance = action.payload.playerchance;
      state.gameid = action.payload.id;
      state.gamestate = action.payload.game.split(",");
      state.justUpdated = true;
      state.player = "2";
      localStorage.setItem("id", action.payload.id);
    },

    gamestateReceived: (state, action) => {
      state.availablemaks = action.payload.availablemaks;
      state.availablepuls = action.payload.availablepuls;
      state.kill = action.payload.kill;
      state.playerchance = action.payload.playerchance;
      state.gameid = action.payload.id;
      state.gamestate = action.payload.game.split(",");
      state.justUpdated = true;
      localStorage.setItem("id", action.payload.id);
    },
  },
});

//authentication related
export const login = (data) =>
  actions.apicallbegan({
    method: "POST",
    onSuccess: tokenReceived.type,
    onRedirect: "/home",
    onError: errorOccoured.type,
    data: data,
    url: "/auth/login/",
  });
export const register = (data) =>
  actions.apicallbegan({
    method: "PATCH",
    url: "/users/",
    onSuccess: changePosts.type,

    data,
  });
export const logout = (headers) =>
  actions.apicallbegan({
    method: "POST",
    url: "/auth/logout/",
    onSuccess: logedout.type,

    headers,
    data: {},
  });

//post

export const post = (data, headers) =>
  actions.apicallbegan({
    method: "POST",
    url: "/game/",
    onSuccess: gamestateCreated.type,
    headers,
    data,
  });

export const postupdate = (data, headers, gameid) =>
  actions.apicallbegan({
    method: "PATCH",
    url: `/game/${gameid}/`,
    onSuccess: gamestateReceived.type,
    headers,
    data,
  });

export const getpost = (headers, gameid) =>
  actions.apicallbegan({
    method: "GET",
    url: `/game/${gameid}/`,
    onSuccess: gamestateJoined.type,
    headers,

  });
export const refreshGame = (headers, gameid) =>
  actions.apicallbegan({
    method: "GET",
    url: `/game/${gameid}/`,
    onSuccess: gamestateReceived.type,
    headers,

  });


export const {
  tokenReceived,
  errorOccoured,
  changePosts,
  logedout,
  gamestateReceived,
  gamestateCreated,
  gamestateJoined,

} = Slice.actions;
export default Slice.reducer;
