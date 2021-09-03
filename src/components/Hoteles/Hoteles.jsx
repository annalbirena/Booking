import React from 'react';
import './hoteles.scss';
import Hotel from '../Hotel/Hotel';
import Alert from '../Alert/Alert';
import { hotelsData } from '../../resources/scripts/data';

function Hoteles(props){

    //Funciones para resetear Fecha
    const resetInputDate = (date) => {
        return Math.floor(new Date(date+"T00:00:00").getTime()/1000);
    }

    const resetHotelDate = (date) => {
         return Math.floor(new Date(date).getTime()/1000);
    }                 

    //Funcion que genera nueva lista con filter
    const newHotelsData = () => {
        return hotelsData
                //Filtro DATES
                .filter((hotel) => {
                    if(props.fromDate === "" || props.toDate === ""){
                        return true;
                    } else {
                        let initialDate = resetInputDate(props.fromDate);
                        let finalDate= resetInputDate(props.toDate);
                        let initialDateHotel = resetHotelDate(hotel.availabilityFrom);
                        let finalDateHotel = resetHotelDate(hotel.availabilityTo);
                        return initialDateHotel >= initialDate && finalDateHotel <= finalDate; 
                    }
                })
                //Filtro COUNTRY
                .filter((hotel) => {
                    return hotel.country.toUpperCase() === props.country.toUpperCase() || props.country === "todos";
                })
                //Filtro PRECIO
                .filter((hotel) => {
                    let priceNumber;
                    if (props.price === "economico"){
                        priceNumber = 1;
                    } else if (props.price === "confort"){ 
                        priceNumber = 2;
                    } else if (props.price === "lujos"){ 
                        priceNumber = 3;
                    } else if (props.price === "magnifico"){ 
                        priceNumber = 4;
                    }
                    return hotel.price === priceNumber || props.price === "todos";
                })
                //Filtro TAMAÑO
                .filter((hotel) => {
                    let size;
                    if(hotel.rooms <= 10){
                        size = "pequeño";
                    } else if (hotel.rooms > 10 & hotel.rooms < 20){
                        size = "mediano";
                    } else if (hotel.rooms >= 20){
                        size = "grande";
                    }
                    return props.size === size || props.size === "todos";
                })
    }

    //Asignar resultado de la funcion que filtra a una variable
    const newList = newHotelsData();

    //Mostrar alerta en caso no haya hoteles en la nueva lista

    if (newList.length === 0) {
        return(
            <Alert />
        )
    } else {
        return(
            <div className="cards-container">
                {newList.map((hotel) => {
                    return(
                        <Hotel
                        key={hotel.slug} 
                        name= {hotel.name}
                        photo={hotel.photo}
                        description={hotel.description}
                        availabilityFrom={hotel.availabilityFrom}
                        availabilityTo={hotel.availabilityTo}
                        rooms={hotel.rooms}
                        city={hotel.city}
                        country={hotel.country}
                        price={hotel.price}
                    />
                    );
                })}
        </div>
        )
    }
   /*  const hotelesComponents = hotelsData.map((hotel) => (
        <Hotel
            slug={hotel.slug}
            name= {hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            availabilityFrom={hotel.availabilityTo}
            availabilityTo={hotel.availabilityFrom}
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.city}
            price={hotel.price}
        />
    ));
    return <div> {hotelesComponents} </div> */
}

export default Hoteles;