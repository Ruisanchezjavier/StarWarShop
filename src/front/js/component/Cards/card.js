import React from 'react';
import { Link } from 'react-router-dom';
import { cardImages } from '../../../img/A New Hope/Category/cardImages.js';


export const HeroCard = ({
    id,
    name1,
    Rarity,
    Type,
    Points,
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ cardImages(`./${ id }.jpg`) } className="card-img" alt={ name1 } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { name1 } </h5>
                        <p className="card-text"> { Rarity } </p>

                        {
                            ( Points !== Points ) 
                                && <p className="card-text"> { Points } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { Type } </small>
                        </p>

                        <Link to={ `.card/${ id }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
