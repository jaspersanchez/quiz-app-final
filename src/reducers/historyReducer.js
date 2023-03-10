export const HistoryInitState = {
  history: [],
  latestSubmitted: null,
};
export const historyReducer = (state = HistoryInitState, { type, payload }) => {
  switch (type) {
    case "LOAD_HISTORY_SUCCESS":
      return { ...state, history: [payload] };
    case "ADD_ANSWER_SUCCESS":
      return { history: [...state.history, payload], latestSubmitted: payload };

    case "CLEAR_LATEST_ANSWER":
      return { ...state, latestSubmitted: null };
    default:
      return state;
  }
};
