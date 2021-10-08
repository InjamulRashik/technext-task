import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/dataAction";
import Home from "./Home";

function DataContainer(props) {
  const { fetchData, apiData } = props;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return apiData.loading ? (
    <h2>Loading</h2>
  ) : apiData.error ? (
    <h2>{apiData.error}</h2>
  ) : (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Technext-Task</h1>
        <div className="row">
          {apiData &&
            apiData.apiData &&
            apiData.apiData.map((data) => (
              <Home key={data.mission_name} data={data}></Home>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    apiData: state.dataReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
