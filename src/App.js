import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from './redux/sliceWeather';


function App() {
  const dispatch = useDispatch()
    //lo useEffect fa in modo che all'avvio della pagina venga eseguita la funzione fetchCities()
    useEffect(() => {
        dispatch(fetchCities())
    }, [dispatch])

  return (
    <div className="App">

    </div>
  );
}

export default App;
