import { combineReducers } from 'redux'

import citiesReducer from './sliceWeather'

/* raggruppo tutti i reducers */
const rootReducer = combineReducers({
    cities : citiesReducer
})

export default rootReducer