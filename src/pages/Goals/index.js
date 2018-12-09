import { connect } from "react-redux";
import {
  createGoal,
  updateGoal,
  deleteGoal,
  createImpact,
  createPerson
} from "../../store/actions";
import GoalsPage from "./GoalsPage";

const mapStateToProps = ({ goals, people }) => ({ goals, people });
const mapDispatchToProps = {
  createGoal,
  updateGoal,
  deleteGoal,
  createImpact,
  createPerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalsPage);
