export default (state = [], action) => {
  const people = [...state];
  switch (action.type) {
    case "CREATE_PERSON":
      people.push(action.name);
      window.localStorage.setItem("people", JSON.stringify(people));
      return people;
    case "UPDATE_PERSON":
      people[action.index] = action.name;
      window.localStorage.setItem("people", JSON.stringify(people));
      return people;
    case "DELETE_PERSON":
      people.splice(action.index, 1);
      window.localStorage.setItem("people", JSON.stringify(people));
      return people;
    default:
      return state;
  }
};
