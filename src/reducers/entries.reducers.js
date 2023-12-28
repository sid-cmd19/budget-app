const reducer = (state = initialEntries, action) => {
  // console.log("action: ", action); Reducers should not have side effects
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    default:
      return state;
  }
};

export default reducer;

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 100.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 200.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: 50.0,
    isExpense: true,
  },
];
