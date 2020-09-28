import * as actionTypes from "./actiontypes";
import axios from "axios";

const storeCityData = (cityData) => {
  
  return {
    cityData: cityData,
    type: actionTypes.GET_CITY_DATA,
  };
};

export const getCityData = () => {
  return (dispatch) => {
    axios
      .get("https://api.jsonbin.io/b/5f6f36127243cd7e824413e1")
      .then((response) => {
        dispatch(storeCityData(response.data.slice(0, 20)));
      });
  };
};


export const addCityHandler = (newCity) => {
    return {
        type: actionTypes.ADD_NEW_CITY,
        newCity:newCity
    }
}

export const deleteCity = (id) => {
    return {
        type: actionTypes.DELETE_CITY,
        cityId: id
    }
}

export const shortListCity = (city) => {
    return {
        type:actionTypes.SHORTLIST_CITY,
        shortlistedCity: city
    }
}

export const removeFromShortList = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_SHORTLIST,
        id: id
    }
}

