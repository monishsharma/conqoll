import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Shortlisted(props) {
  const [columns, setColumns] = useState([
    "Sno",
    "City",
    "District",
    "State",
    "Action",
  ]);

  const [rows, setrows] = useState([]);

  useEffect(() => {
    let shortListedCity = [];
    shortListedCity = props.rows.filter((city) => {
      return city.shortlisted == true;
    });
    setrows(shortListedCity);
  }, [props.rows]);

  return (
    <div>
      {rows !== null ? <Table rows={rows} columns={columns}></Table> : ""}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rows: state.city.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCity: () => dispatch(actions.getCityData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shortlisted);
