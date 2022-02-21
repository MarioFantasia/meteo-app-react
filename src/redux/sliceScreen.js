import { createSlice } from '@reduxjs/toolkit'

/* INIZIALIZZAZIONE STATO INIZIALE */
export const initialState = {
    screen: false,
}


/* CREAZIONE DELLO SLICE */
const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        screenTrue: (state) => {
            state.screen = true;
        },

        screenFalse: (state) => {
            state.screen = false;
        }
    }
});

export const { screenTrue, screenFalse } = screenSlice.actions

export const screenSelector = state => state.screen

export default screenSlice.reducer