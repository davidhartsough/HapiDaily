import { connect } from "react-redux";
import ImpactsPage from "./ImpactsPage";

const mapStateToProps = ({ impacts }) => ({ impacts });

export default connect(mapStateToProps)(ImpactsPage);
