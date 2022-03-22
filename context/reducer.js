export const initialState = {
  currentTheme: "",
  recentlyPlayed: {},
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
    default:
      throw new Error();
  }
};
