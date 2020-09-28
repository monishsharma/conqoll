import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import "./Home.css";
import Modal from "../../components/Modal/Modal";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Home(props) {
  const [columns, setColumns] = useState([
    "Sno",
    "City",
    "District",
    "State",
    "Action",
  ]);

  const [showmodal, setShowmodal] = useState(false);
  const [filteredList, setfilteredList] = useState([props.rows]);

  const filterTableHandler = (ch) => {
    let filterResult = [];
    let rowCopy = [...props.rows];
    filterResult = rowCopy.filter((data) => {
      return (
        data.City.toLowerCase().indexOf(ch.toLowerCase()) > -1 ||
        data.District.toLowerCase().indexOf(ch.toLowerCase()) > -1 ||
        data.State.toLowerCase().indexOf(ch.toLowerCase()) > -1
      );
    });
    setfilteredList(filterResult);
  };

  useEffect(() => {
    setfilteredList(props.rows);
    if (props.rows.length == 0) {
      props.getCity();
    }
  }, [props]);

  const closeModalHandler = () => {
    setShowmodal(false);
  };

  return (
    <div className="home">
      <div className="home__add__city">
        <button onClick={() => setShowmodal(true)}>Add City</button>
      </div>
      <Modal
        show={showmodal}
        closeModal={() => closeModalHandler}
        data={props.rows}
      />
      <Table
        rows={filteredList}
        columns={columns}
        filterTable={(ch) => filterTableHandler(ch)}
      ></Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
