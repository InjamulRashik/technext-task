import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/dataAction";
import Home from "./Home";

function DataContainer(props) {
  const [search, setSearch] = useState("");
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
      <div className="container">
        <h1 className="text-center pt-4 fw-bold ">Technext-Task</h1>
        <div className="container d-flex justify-content-center">
          <input
            className="form-control fs-5 w-25 py-2 px-4 mb-4 mt-4 rounded-pill border border-4 border-danger "
            type="text"
            name=""
            id=""
            placeholder="🔍 Search By Rocket Name "
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="row">
          {apiData &&
            apiData.apiData &&
            apiData.apiData
              .filter((data) => {
                if (search === "") {
                  return data;
                } else if (
                  data.rocket.rocket_name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return data;
                }
                return 0;
              })
              .map((data) => <Home key={data.mission_name} data={data}></Home>)}
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
