import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import cityReducer from './reducers/cityData'

const rootReducer = combineReducers({
    city: cityReducer
});

const persitConfig = {    
  key : 'root',
  storage,
}



export default persistReducer(persitConfig, rootReducer);;
