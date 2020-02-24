import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
    const { url, urlToImage, title, description, source } = noticia

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                        href={url}>
                        Ver Noticia Completa</a>

                </div>
            </div>
        </div>
    )
}
Noticia.propTypes = {
    noticia: PropTypes.object
}

export default Noticia;