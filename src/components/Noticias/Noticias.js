import React from 'react';
import Noticia from '../Noticia/Noticia';
import PropTypes from 'prop-types';

const ListNoticias = ({ noticias }) => (
    <div className="row">
        {Array.isArray(noticias) && noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}

    </div>
)

ListNoticias.propTypes = {
    noticias: PropTypes.array
}
export default ListNoticias;