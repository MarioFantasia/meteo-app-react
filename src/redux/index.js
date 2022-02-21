import { combineReducers } from 'redux';
import citiesReducer from './sliceWeather';
import screenReducer from './sliceScreen';


/* raggruppo tutti i reducers */
const rootReducer = combineReducers({
    cities : citiesReducer,
    screen: screenReducer

})

export default rootReducer