import * as actionTypes from "../actions/actiontypes";
import React from "react";

const initialState = {
  cities: [],
  shortListed: [],
};

const updateArray = (oldObj, newObj) => {
  let updatedArray = [];
  newObj.cities.map((data, index) => {
    return updatedArray.push({
      id: new Date(),
      Sno: index + 1,
      City: data.City,
      District: data.District,
      State: data.State,
      action: true,
      shortlisted: false,
    });
  });
  return {
    cities: updatedArray,
  };
};

const cityData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CITY_DATA: {
      return updateArray(state, { cities: action.cityData });
    }
    case actionTypes.ADD_NEW_CITY: {
      return updateArray(state, { cities: [...state.cities, action.newCity] });
    }
    case actionTypes.DELETE_CITY: {
      let updatedCities = state.cities.filter((city) => {
        return city.id !== action.cityId;
      });
      return {
        ...state,
        cities: updatedCities,
      };
    }
    case actionTypes.SHORTLIST_CITY: {
      var updatedCity = [...state.cities];
      updatedCity.forEach((city, index) => {
        if (city.id === action.shortlistedCity.id) {
          state.cities[index].shortlisted = true;
        }
      });
      return {
        ...state,
        cities: updatedCity,
      };
    }
    case actionTypes.REMOVE_FROM_SHORTLIST: {
      var updatedCity = [...state.cities];
      updatedCity.forEach((city, index) => {
        if (city.id === action.id) {
          state.cities[index].shortlisted = false;
        }
      });
      return {
        ...state,
        cities: updatedCity,
      };
    }
    default:
      return state;
  }
};

export default cityData;
