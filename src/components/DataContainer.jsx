import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/dataAction";

function DataContainer() {
  return <div>Data</div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
