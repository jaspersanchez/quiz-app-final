export const QuestionInitState = [];

export const questReducer = (state = QuestionInitState, { type, payload }) => {
  switch (type) {
    case "LOAD_QUESTIONS_SUCCESS":
      return [...payload];

    default:
      return state;
  }
};
