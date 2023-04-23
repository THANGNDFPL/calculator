export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const handleNumber = (value, state) => {
  return {
    ...state,
    currentValue:
      state.currentValue === "0"
        ? `${value}`
        : `${state.currentValue}${value}`,
  };
}


const handleEqual = (state) => {
  const currentValue = parseFloat(state.currentValue);
  const previousValue = parseFloat(state.previousValue);
  const operator = state.operator;
  let result = 0;
  switch (operator) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
    default:
      result = currentValue;
  }
  return {
    ...state,
    previousValue: "0",
    currentValue: `${result}`,
    operator: null,
  };
}

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state)
    case "operator":
      return {
        ...state,
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};


export default calculator;  