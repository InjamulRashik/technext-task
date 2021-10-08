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
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <input
            className="form-control fs-5 w-25 py-2 px-4 mb-4 mt-4 rounded-pill border border-4 border-danger me-4 "
            type="text"
            name=""
            id=""
            placeholder="🔍 Search By Rocket Name "
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <div className="d-flex mb-4 text-dark">
            <div class="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <span className="pe-2 fs-5">
                      <svg
                        className="me-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-sort-down-alt"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                      </svg>
                      Filters
                    </span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <div className="row d-flex ">
                      <div className="col-md-4 d-flex flex-column ">
                        <h5 className="border-bottom pb-2">Launch Date</h5>
                        <p>Last Week</p>
                        <p>Last Month</p>
                        <p>Last Year</p>
                      </div>
                      <div className="col-md-4 d-flex flex-column">
                        <h5 className="border-bottom pb-2">Launch Status</h5>
                        <p>Success</p>
                        <p>Failure</p>
                      </div>
                      <div className="col-md-4 d-flex flex-column">
                        <br />
                        <h5 className="border-bottom pb-2">Release</h5>
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
