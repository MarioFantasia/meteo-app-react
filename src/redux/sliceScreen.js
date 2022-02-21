import { createSlice } from '@reduxjs/toolkit'

/* INIZIALIZZAZIONE STATO INIZIALE */
export const initialState = {
    screen: true,
}


/* CREAZIONE DELLO SLICE */
const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
    }
});

export const screenSelector = state => state.screen

export default screenSlice.reducer