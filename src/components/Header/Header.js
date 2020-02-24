import React from 'react';
import developer from '../../assets/Desarrollador.jpeg'
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
    return (
        <nav className="nav-wrapper black darken-6">
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    color: 'white',
                    fontSize: '18px',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center'

                }}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/tuberquia2115/Buscador-de-Noticias"} style={{
                            cursor: 'pointer',
                        }}>
                        <p style={{ margin: '0px 20px 0px 0px' }}>Desarrollador</p>
                    </a>
                    <img style={{ margin: '0px 20px 0px 0px' }} src={developer} width="50" height="50" alt="img-developer" className="circle responsive-im" />
                </div>
                <div>
                    <a href="#!" className="brand-logo center">{titulo}</a>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.string
}
export default Header;