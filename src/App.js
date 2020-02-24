import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListNoticias from './components/Noticias/Noticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);


  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=df60cf1e7d954df29b3724c2f9008a77`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
  return (
    <React.Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListNoticias noticias={noticias} />
      </div>
    </React.Fragment>
  );
}

export default App;
