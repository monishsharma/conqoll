import React, { useState } from "react";
import "./Modal.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Modal(props) {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const newCity = () => {
    let newCity = {
      id: new Date(),
      Sno: "",
      City: city,
      State: state,
      District: district,
      Action: true,
      shortListed: false,
    };
    props.addNewCity(newCity);
  };

  return (
    <div>
      {props.show && (
        <div className="modal-window">
          <div className="modal-content">
            <span onClick={props.closeModal()} className="close">
              &times;
            </span>
            <div className="modal__body">
              <h3>Add City</h3>
              <div className="modal__city">
                <label>City</label>
                <input
                  placeholder="select City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="modal__city">
                <label>District</label>
                <select onChange={(e) => setDistrict(e.target.value)}>
                  <option selected>Select District</option>
                  {props.data.map((data, index) => {
                    return (
                      <option key={index} value={data.District}>
                        {data.District}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="modal__city">
                <label>State</label>
                <select onChange={(e) => setState(e.target.value)}>
                  <option selected disabled>
                    Select State
                  </option>
                  {props.data.map((data, index) => {
                    return (
                      <option value={data.State} key={index}>
                        {data.State}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="home__add__city save">
                <button onClick={() => newCity()}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCity: (newCity) => dispatch(actions.addCityHandler(newCity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
