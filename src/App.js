import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from './redux/sliceWeather';

import MainContainer from './components/containers/container';


function App() {
  const dispatch = useDispatch()
    //lo useEffect fa in modo che all'avvio della pagina venga eseguita la funzione fetchCities()
    useEffect(() => {
        dispatch(fetchCities())
    }, [dispatch])

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
