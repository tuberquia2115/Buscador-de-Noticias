import React, { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';

function App() {

  const [categoria, guardarCategoria] = useState('');
  return (
    <React.Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
