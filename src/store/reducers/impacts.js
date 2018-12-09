export default (state = [], action) => {
  const impacts = [...state];
  switch (action.type) {
    case "CREATE_IMPACT": {
      const newImpact = {
        impact: action.impact,
        date: action.date
      };
      impacts.push(newImpact);
      window.localStorage.setItem("impacts", JSON.stringify(impacts));
      return impacts;
    }
    default:
      return state;
  }
};
