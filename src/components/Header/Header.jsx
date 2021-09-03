import React from 'react';
import './header.scss';
import Filters from "../Filters/Filters";

//Convertir unixtime en lenguaje natural
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
function dateSensitive(date) {
    let newDate = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'GMT' };
    let newDateSensitive = newDate.toLocaleDateString('es-ES', options);
    return (date === "") ? "Cualquier fecha" : newDateSensitive;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Header(props) {
    return (
        <div className="header">
            <h1>Hotel BOOKING</h1>
            <div className="text-container">
                <h3>Desde: {capitalizeFirstLetter(dateSensitive(props.fromDate))}</h3>
                <h3>Hasta: {capitalizeFirstLetter(dateSensitive(props.toDate))}</h3>
                <h3>Pais: {capitalizeFirstLetter(props.country)}</h3>
                <h3>Precio: {capitalizeFirstLetter(props.price)}</h3>
                <h3>Tamaño: {capitalizeFirstLetter(props.size)}</h3>
            </div>
            <Filters
                fromDate={props.fromDate}
                setFromDate={props.setFromDate}
                toDate={props.toDate}
                setToDate={props.setToDate}
                country={props.country}
                setCountry={props.setCountry}
                price={props.price}
                setPrice={props.setPrice}
                size={props.size}
                setSize={props.setSize}
            />
        </div>
    )
}

export default Header;