const reducer = (state, action) => {
  if (action.type === "TOGGLE_NAV") {
    return { ...state, isNavOpen: !state.isNavOpen };
  }
  if (action.type === "CLOSE_NAV") {
    return { ...state, isNavOpen: false };
  }
  if (action.type === "OPEN_NAV") {
    return { ...state, isNavOpen: true };
  }
  if (action.type === "CHANGE") {
    return { ...state, index: state.index + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, index: 0 };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
