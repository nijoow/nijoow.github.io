export const initialState = {
  currentTheme: "",
  recentlyPlayed: {},
  isNavShow: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setTheme":
      return { ...state, currentTheme: action.value };
    case "toggleTheme": {
      return {
        ...state,
        currentTheme: state.currentTheme === "dark" ? "light" : "dark",
      };
    }
    case "setSong":
      return {
        ...state,
        recentlyPlayed: action.value,
      };
    case "toggleNav":
      return {
        ...state,
        isNavShow: !state.isNavShow,
      };
    default:
      throw new Error();
  }
};
