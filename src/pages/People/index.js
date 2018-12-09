import { connect } from "react-redux";
import { createPerson, updatePerson, deletePerson } from "../../store/actions";
import PeoplePage from "./PeoplePage";

const mapStateToProps = ({ people }) => ({ people });
const mapDispatchToProps = { createPerson, updatePerson, deletePerson };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeoplePage);
