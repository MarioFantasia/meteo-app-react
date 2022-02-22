import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'


/* INIZIALIZZAZIONE STATO INIZIALE */
const initialState = {
    cities: [],
}


/* CREAZIONE DELLO SLICE */
const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        //modifica lo stato di cities. Il payload è l'argomento che riceve la funzione
        getCitiesSuccess: (state,  {payload} ) => {
            state.cities = state.cities.concat(payload);
        },

        /* changeCityView: (state, {payload}) => {
            state.cities = current(state);
        } */
    }
});


/* ACTIONS, SELECTOR, REDUCERS */
export const { getCitiesSuccess, changeCityView } = citiesSlice.actions

export const citiesSelector = state => state.cities;


export default citiesSlice.reducer


/* FUNZIONE DI CHIAMATA API CON AXIOS */
/* 
Dalla prima chiamata ottengo latitudine e longitudine
Nella seconda chiamata sfrutto i dati della prima per recuperare i dati
*/
export function fetchCities() {
    const query = ['torino', 'londra', 'olbia']; //saranno le prime tre citta ad essere visualizzate
    
    return async dispatch => {
        query.forEach((elm, index) => {
            axios.get(`https://api.openweathermap.org/data/2.5/find?q=${elm}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`, {
            }).then(response => {
                /* 
                Nei dati dell'API, se ci sono piu elementi per la stessa ricerca, il primo elemento ha il nome completo della città 
                es: "City Of London"
                */
                if(response.data.count > 1) {
                    let lat = response.data.list[1].coord.lat;
                    let lon = response.data.list[1].coord.lon;
                    return [lat, lon]; 

                } else {
                    let lat = response.data.list[0].coord.lat;
                    let lon = response.data.list[0].coord.lon;
                    return [lat, lon];
                }

            }).then((coord) => {
                
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=minutely,alerts&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`, {
                }).then(response => {
                    //inseirsco la risposta in un oggetto
                    const object = response.data;

                    // do all'oggetto una nuova proprieta 'id'
                    object.id = index + 1; 

                    //imposto la nuova proprieta 'name' trasformando i dati dell'array query. olbia => Olbia
                    object.name = elm.toLowerCase().charAt(elm[0]).toUpperCase() + elm.slice(1);

                    //modifica dello stato iniziale. Passo l'oggetto come payload
                    dispatch(getCitiesSuccess(object)); 
                })
            })
        })
    }
}