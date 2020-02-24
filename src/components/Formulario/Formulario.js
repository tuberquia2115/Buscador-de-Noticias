import React from 'react';
import style from './formulario.module.css';
import useSelect from '../../Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ guardarCategoria }) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

    const [categoria, SelectNoticias] = useSelect('sports', OPTIONS);

    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }
    return (
        <div className={`${style.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={style.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${style['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func
}
export default Formulario;