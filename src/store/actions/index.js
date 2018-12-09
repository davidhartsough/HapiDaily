// Goals

export const createGoal = (goal, person) => ({
  type: "CREATE_GOAL",
  goal,
  person
});

export const updateGoal = (index, goal, person) => ({
  type: "UPDATE_GOAL",
  index,
  goal,
  person
});

export const deleteGoal = index => ({
  type: "DELETE_GOAL",
  index
});

// Impacts

export const createImpact = impact => ({
  type: "CREATE_IMPACT",
  impact,
  date: Date.now()
});

// People

export const createPerson = name => ({
  type: "CREATE_PERSON",
  name
});

export const updatePerson = (index, name) => ({
  type: "UPDATE_PERSON",
  index,
  name
});

export const deletePerson = index => ({
  type: "DELETE_PERSON",
  index
});
