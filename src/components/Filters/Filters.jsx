import React from 'react';
import './filters.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Filters(props) {
    //Funciones para obtener y cambiar los estados
    const handleCountry = (e) => {
        //Asignar como nuevo estado el valor obtenido del evento
        //props.setCountry es la funcion del estado global definido en App.jsx y es compartido como prop
        props.setCountry(e.target.value);
    };
    const handlePrice = (e) => {
        props.setPrice(e.target.value);
    };
    const handleSize = (e) => {
        props.setSize(e.target.value);
    };
    const handleFromDate = (e) => {
        props.setFromDate(e.target.value);
    }
    const handleToDate = (e) => {
        props.setToDate(e.target.value);
    }

    //Funcion para resetear los filtros
    const reset = () => {
        props.setFromDate("");
        props.setToDate("");
        props.setCountry("todos");
        props.setPrice("todos");
        props.setSize("todos");
    }

    //Funcion que obtiene la fecha actual
    const actualDate = () => {
        let actualDate = new Date(),
            month = "" + (actualDate.getMonth() + 1),
            day = "" + actualDate.getDate(),
            year = actualDate.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    }

    return (
        <div className="container-filters">
            <div className="filters">
                {/*Filtro Fecha inicial*/}
                <div className="filter-container">
                    <div className="icon-container">
                        <div className="icon">
                            <FontAwesomeIcon className="icon-img" icon="calendar-alt" />
                        </div>
                        <span>Check In</span>
                    </div>
                    <div className="filter-input">
                        <input value={props.fromDate} onChange={handleFromDate} type="date" min={actualDate()} />
                    </div>
                </div>
                {/*Filtro Fecha final*/}

                <div className="filter-container">
                    <div className="icon-container">
                        <div className="icon">
                            <FontAwesomeIcon className="icon-img" icon="calendar-alt" />
                        </div>
                        <span>Check Out</span>
                    </div>
                    <div className="filter-input">
                        <input value={props.toDate} onChange={handleToDate} type="date" min={props.fromDate} />
                    </div>
                </div>
                {/*Filtro pais*/}
                <div className="filter-container">
                    <div className="icon-container">
                        <div className="icon">
                            <FontAwesomeIcon className="icon-img" icon="map-marker-alt" />
                        </div>
                        <span>Pais</span>
                    </div>
                    <select className="filter-select" value={props.country} onChange={handleCountry}>
                        <option value="todos">Todos</option>
                        <option value="argentina">Argentina</option>
                        <option value="brasil">Brasil</option>
                        <option value="chile">Chile</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                </div>
                {/*Filtro precio*/}
                <div className="filter-container">
                    <div className="icon-container">
                        <div className="icon">
                            <FontAwesomeIcon className="icon-img" icon="dollar-sign" />
                        </div>
                        <span>Precio</span>
                    </div>
                    <select className="filter-select" value={props.price} onChange={handlePrice}>
                        <option value="todos">Todos</option>
                        <option value="economico">$</option>
                        <option value="confort">$ $</option>
                        <option value="lujos">$ $ $</option>
                        <option value="magnifico">$ $ $ $</option>
                    </select>
                </div>
                {/*Filtro tamaño*/}
                <div className="filter-container">
                    <div className="icon-container">
                        <div className="icon">
                            <FontAwesomeIcon className="icon-img" icon="hotel" />
                        </div>
                        <span>Tamaño</span>
                    </div>
                    <select className="filter-select" value={props.size} onChange={handleSize}>
                        <option value="todos">Todos</option>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>

                <button className="button reset-button" onClick={reset}> <FontAwesomeIcon icon="trash" /> Limpiar</button>
            </div>
        </div>
    )
}

export default Filters;