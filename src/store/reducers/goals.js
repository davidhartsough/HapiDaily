export default (state = [], action) => {
  const goals = [...state];
  switch (action.type) {
    case "CREATE_GOAL": {
      const newGoal = {
        goal: action.goal,
        person: action.person
      };
      goals.push(newGoal);
      window.localStorage.setItem("goals", JSON.stringify(goals));
      return goals;
    }
    case "UPDATE_GOAL":
      goals[action.index] = {
        goal: action.goal,
        person: action.person
      };
      window.localStorage.setItem("goals", JSON.stringify(goals));
      return goals;
    case "DELETE_GOAL":
      goals.splice(action.index, 1);
      window.localStorage.setItem("goals", JSON.stringify(goals));
      return goals;
    default:
      return state;
  }
};
