import React from "react";

const Home = (props) => {
  const statusStyle = {
    color: "red",
  };
  const {
    mission_name,
    links,
    rocket,
    launch_date_utc,
    launch_year,
    launch_success,
  } = props.data;
  const dateUTC = new Date(launch_date_utc);
  const LaunchDateUTC = dateUTC.toDateString();
  const launchStatus = launch_success;
  if (launchStatus != null) {
    if (launchStatus.toString().toUpperCase() === "TRUE") {
      statusStyle.color = "green";
    }
  }
  return (
    <div className="col-md-4 mb-4">
      <div className="card text-center text-dark ">
        <div className="card-header fw-bold">{mission_name}</div>
        <div className="card-body">
          <img src={links.mission_patch} width="80" alt="NoImage" />
          <div className="d-flex fw-bold justify-content-start text-start mt-4">
            <ul>
              <li>
                {" "}
                Rocket Name :{" "}
                <span className="text-danger">{rocket.rocket_name}</span>{" "}
              </li>
              <li>Launch Year : {launch_year}</li>
              <li>Launch Date (UTC) : {LaunchDateUTC} </li>
            </ul>
          </div>
        </div>
        <div className="card-footer fw-bold" style={statusStyle}>
          Launch Status :
          <span>
            {" "}
            {launchStatus == null
              ? "No Record"
              : launchStatus.toString().toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
