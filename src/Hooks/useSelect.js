import React, { useState } from 'react';

const useSelect = (stateInicial, options) => {
    const [state, actualizarState] = useState(stateInicial)


    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            <option value="">Seleccione la categoría</option>
            {Array.isArray(options) && options.map(opt => (
                <option value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}

export default useSelect;