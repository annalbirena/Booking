import React, {useState} from "react"; 
//Styles
import './App.scss'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faMapMarkerAlt, faDollarSign, faHotel, faTrash, faBed} from '@fortawesome/free-solid-svg-icons';
//Components
import Header from "./components/Header/Header";
import Hoteles from "./components/Hoteles/Hoteles";

//Add icons
library.add(faCalendarAlt, faMapMarkerAlt, faDollarSign, faHotel, faTrash, faBed);

function App() {
  //Estados globales
  const [ fromDate, setFromDate] = useState("");
  const [ toDate, setToDate] = useState("");
  const [ country, setCountry] = useState("todos");
  const [ price, setPrice] = useState("todos");
  const [ size, setSize] = useState("todos");

  return (
    <div className="App">
      <Header
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        country={country}
        setCountry={setCountry}
        price={price}
        setPrice={setPrice}
        size={size}
        setSize={setSize}
      />
      <Hoteles 
        fromDate={fromDate}
        toDate={toDate}
        country={country}
        price={price}
        size={size}
      />
    </div>
  );
}

export default App;
