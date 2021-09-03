import React from 'react';
import './hotel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//Convertir unixtime en lenguaje natural
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
function dateSensitive (date) {
    let newDate = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'/* ,timeZone: 'GMT'  */};
    let newDateSensitive = newDate.toLocaleDateString('es-ES', options);
    return (date === "") ? "Cualquier fecha" : newDateSensitive;
}

//Funcion para mostrar el precio de cada hotel
function cardPrice (price) {
    let newArray = [];
    for (let i=0; i<price; i++){
        newArray.push(1);
    }
    return(
        <div className="card-price flex">
            {newArray.map((item, index) => {
                return(
                    <div key={index} className="price"><span>$</span></div>
                );
            })}
        </div>
    )
}

function Hotel(props) {

    return (
        <div className="card-hotel">
            <figure>
                <img src={props.photo} alt="Imagen de hotel" />
            </figure>
            <div className="card-container">
                <h4 className="card-title">{props.name}</h4>
                <div className="card-date">
                    <div>
                        <span className="date-text">Check In</span>
                        <div className="date">
                            <span> Desde el {dateSensitive(props.availabilityFrom)}</span>
                        </div>
                    </div>
                    <div>
                        <span className="date-text">Check Out</span>
                        <div className="date">
                            <span>Hasta el {dateSensitive(props.availabilityTo)}</span>
                        </div>
                    </div>
                </div>
                <div className="card-description">
                    <p>{props.description}</p>
                </div>
                <div className="card-location flex">
                    <div className="icon icon-card">
                        <FontAwesomeIcon className="icon-img" icon="map-marker-alt" />
                    </div>
                    <span>{props.city}, {props.country}</span>
                </div>
                <div className="card-group flex">
                    <div className="card-rooms flex">
                        <div className="icon icon-card">
                            <FontAwesomeIcon className="icon-img" icon="bed" />
                        </div>
                        <span>{props.rooms} Habitaciones</span>
                    </div>
                        {cardPrice(props.price)}
                </div>
                <button className="button book-button">RESERVAR</button>
            </div>
        </div>
    )
}

export default Hotel;