import React from "react";
import "./Table.css";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

function Table(props) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {props.columns.map((col, index) => {
              return <th key={index}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.location.pathname === "/" && (
            <tr>
              <td colSpan="5">
                <input
                  className="table__input"
                  placeholder="Search city, district, state"
                  onChange={(e) => props.filterTable(e.target.value)}
                />
              </td>
            </tr>
          )}
          {props.rows.map((row, index) => {
            return (
              <tr className={row.shortlisted ? "shortlisted" : ""} key={index}>
                {props.columns.map((col, colIndex) => {
                  return (
                    <td key={colIndex + 1}>
                      {col === "Action" && props.location.pathname === "/" && (
                        <div className="btn-grp">
                          <button onClick={() => props.shortListCity(row)}>
                            {row.shortlisted ? 'shorlisted' : 'shorlist'}
                          </button>
                          <button onClick={() => props.deleteCity(row.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                      {col === "Action" &&
                        props.location.pathname === "/shortlist" && (
                          <div className="btn-grp">
                            <button
                              onClick={() => props.removeFromShortList(row.id)}
                            >
                              Remove from shortlist
                            </button>
                          </div>
                        )}
                      {row[col]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // rows: state.city.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => dispatch(actions.deleteCity(id)),
    shortListCity: (city) => dispatch(actions.shortListCity(city)),
    removeFromShortList: (id) => dispatch(actions.removeFromShortList(id)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);
